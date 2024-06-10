using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using System.Linq;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController : ControllerBase
    {
        // 定義 HttpClient 來發送 HTTP 請求
        private readonly HttpClient _httpClient;

        // 構造函數，用於依賴注入 HttpClient
        public WeatherController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        // HTTP GET 方法，用於獲取天氣數據
        [HttpGet]
        public async Task<IActionResult> GetWeatherData()
        {
            try
            {
                // 發送 GET 請求到指定的 API 端點
                var response = await _httpClient.GetAsync("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWA-32C13655-5D9F-4048-8E35-69C9F9029E1D");
                response.EnsureSuccessStatusCode(); // 確保請求成功

                // 讀取返回的內容
                var responseData = await response.Content.ReadAsStringAsync();
                // 解析 JSON 數據
                var data = JObject.Parse(responseData);
                // 提取 locations 數據
                var locations = data["records"]["locations"][0]["location"];

                // 從 JSON 數據中選取並組織需要的天氣信息
                var weatherInfo = locations.Select(location => new
                {
                    LocationName = (string)location["locationName"], // 提取位置名稱
                    WeatherDetails = location["weatherElement"].First(element => (string)element["elementName"] == "Wx")["time"].Select(time => new
                    {
                        StartTime = (string)time["startTime"], // 提取開始時間
                        WeatherDescription = (string)time["elementValue"][0]["value"], // 提取天氣描述
                        Temperature = (string)location["weatherElement"].First(element => (string)element["elementName"] == "T")["time"]
                            .First(t => (string)t["startTime"] == (string)time["startTime"])["elementValue"][0]["value"] // 提取對應時間的溫度
                    }).ToList()
                });

                // 返回整理後的天氣信息
                return Ok(weatherInfo);
            }
            catch (HttpRequestException httpRequestException)
            {
                // 如果請求失敗，返回錯誤信息
                return BadRequest($"Error fetching the weather data: {httpRequestException.Message}");
            }
        }
    }
}
