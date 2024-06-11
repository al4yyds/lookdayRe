namespace ReactApp1.Server.Models
{
    public class ECPayService
    {
        private readonly IConfiguration _configuration;
        private readonly HttpClient _httpClient;
        public ECPayService(IConfiguration configuration, HttpClient httpClient)
        {
            _configuration = configuration;
            _httpClient = httpClient;
        }

        public async Task<string> CreatePaymentRequestAsync(ECPayPaymentRequest request)
        {
            var merchantID = _configuration["ECPay:MerchantID"];
            var hashKey = _configuration["ECPay:HashKey"];
            var hashIV = _configuration["ECPay:HashIV"];
            var serviceURL = _configuration["ECPay:ServiceURL"];
            var returnURL = _configuration["ECPay:ReturnURL"];
            var clientBackURL = _configuration["ECPay:ClientBackURL"];
            var orderResultURL = _configuration["ECPay:OrderResultURL"];

            request.MerchantID = merchantID;
            request.PaymentType = "aio";
            request.MerchantTradeDate = DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss");
            request.ReturnURL = returnURL;
            request.ClientBackURL = clientBackURL;
            request.OrderResultURL = orderResultURL;
            request.ChoosePayment = "Credit";

            request.CheckMacValue = CalculateCheckMacValue(request, hashKey, hashIV);

            var formContent = new FormUrlEncodedContent(new[]
            {
            new KeyValuePair<string, string>("MerchantID", request.MerchantID),
            new KeyValuePair<string, string>("MerchantTradeNo", request.MerchantTradeNo),
            new KeyValuePair<string, string>("MerchantTradeDate", request.MerchantTradeDate),
            new KeyValuePair<string, string>("PaymentType", request.PaymentType),
            new KeyValuePair<string, string>("TotalAmount", request.TotalAmount.ToString()),
            new KeyValuePair<string, string>("TradeDesc", request.TradeDesc),
            new KeyValuePair<string, string>("ItemName", request.ItemName),
            new KeyValuePair<string, string>("ReturnURL", request.ReturnURL),
            new KeyValuePair<string, string>("ChoosePayment", request.ChoosePayment),
            new KeyValuePair<string, string>("ClientBackURL", request.ClientBackURL),
            new KeyValuePair<string, string>("OrderResultURL", request.OrderResultURL),
            new KeyValuePair<string, string>("CheckMacValue", request.CheckMacValue),
        });

            var response = await _httpClient.PostAsync(serviceURL, formContent);
            return await response.Content.ReadAsStringAsync();
        }

        private string CalculateCheckMacValue(ECPayPaymentRequest request, string hashKey, string hashIV)
        {
            var parameters = new SortedDictionary<string, string>
        {
            { "MerchantID", request.MerchantID },
            { "MerchantTradeNo", request.MerchantTradeNo },
            { "MerchantTradeDate", request.MerchantTradeDate },
            { "PaymentType", request.PaymentType },
            { "TotalAmount", request.TotalAmount.ToString() },
            { "TradeDesc", request.TradeDesc },
            { "ItemName", request.ItemName },
            { "ReturnURL", request.ReturnURL },
            { "ChoosePayment", request.ChoosePayment },
            { "ClientBackURL", request.ClientBackURL },
            { "OrderResultURL", request.OrderResultURL },
        };

            var urlEncodedStr = string.Join("&", parameters.Select(kv => $"{kv.Key}={kv.Value}"));
            var rawData = $"HashKey={hashKey}&{urlEncodedStr}&HashIV={hashIV}";
            var urlEncodedData = System.Web.HttpUtility.UrlEncode(rawData).ToLower();

            using (var sha256 = System.Security.Cryptography.SHA256.Create())
            {
                var bytes = sha256.ComputeHash(System.Text.Encoding.UTF8.GetBytes(urlEncodedData));
                return BitConverter.ToString(bytes).Replace("-", "").ToUpper();
            }
        }
    }
}
