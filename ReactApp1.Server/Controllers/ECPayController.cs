using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ECPayController : Controller
    {
        private readonly ECPayService _ecPayService;

        public ECPayController(ECPayService ecPayService)
        {
            _ecPayService = ecPayService;
        }

        [HttpPost("create-payment")]
        public async Task<IActionResult> CreatePayment(ECPayPaymentRequest request)
        {
            var result = await _ecPayService.CreatePaymentRequestAsync(request);
            return Ok(result);
        }
    }
}
