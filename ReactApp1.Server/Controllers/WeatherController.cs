using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using System.Linq;
using System.Collections.Generic;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public WeatherController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        [HttpGet]
        public async Task<IActionResult> GetWeatherData()
        {
            try
            {
                var response = await _httpClient.GetAsync("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWA-32C13655-5D9F-4048-8E35-69C9F9029E1D");
                response.EnsureSuccessStatusCode();

                var responseData = await response.Content.ReadAsStringAsync();
                var data = JObject.Parse(responseData);
                var locations = data["records"]["locations"][0]["location"];

                var weatherInfo = locations.Select(location => new WeatherLocation
                {
                    LocationName = (string)location["locationName"],
                    WeatherDetails = location["weatherElement"].First(element => (string)element["elementName"] == "Wx")["time"].Select(time => new WeatherDetail
                    {
                        StartTime = (string)time["startTime"],
                        WeatherDescription = (string)time["elementValue"][0]["value"],
                        Temperature = (string)location["weatherElement"].First(element => (string)element["elementName"] == "T")["time"]
                            .First(t => (string)t["startTime"] == (string)time["startTime"])["elementValue"][0]["value"]
                    }).ToList()
                });

                return Ok(weatherInfo);
            }
            catch (HttpRequestException httpRequestException)
            {
                return BadRequest($"Error fetching the weather data: {httpRequestException.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }

    public class WeatherLocation
    {
        public string LocationName { get; set; }
        public List<WeatherDetail> WeatherDetails { get; set; }
    }

    public class WeatherDetail
    {
        public string StartTime { get; set; }
        public string WeatherDescription { get; set; }
        public string Temperature { get; set; }
    }
}
