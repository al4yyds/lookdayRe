using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Controllers
{
    //載入購物車(Load)

    // 設定路由為 "api/Activities"
    [Route("api/[controller]")]
    [ApiController]

    public class LoadShoppingCartController : Controller
    {
        
        private readonly lookdaysContext _context;

        // 控制器建構函數，注入資料庫上下文
        public LoadShoppingCartController(lookdaysContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
          
        [HttpPost]
        public IActionResult ShoppingLoad(int UserId)
        {
            if (UserId <= 0)
                return BadRequest("無效的用戶ID");
            
            try
            {

                //loadaddcart (載入購物車資料)
                
                var loadaddcart = from r in _context.Bookings
                                  where r.UserId == UserId && r.BookingStatesId == 1
                                  select r;

                if (!loadaddcart.Any()) { 
                    return NotFound("未找到相關的購物車資料");
                }

                return Ok(loadaddcart);

            }
            catch (Exception ex)
            {
                // 記錄例外訊息
                // _logger.LogError(ex, "Error occurred while loading shopping cart");

                return StatusCode(500, "內部伺服器錯誤");
            }
        }
    }
}
