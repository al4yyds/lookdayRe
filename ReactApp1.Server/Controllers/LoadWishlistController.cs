using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Controllers
{
    //載入願望清單(Load)


    // 設定路由為 "api/Activities"
    [Route("api/[controller]")]
    [ApiController]


    public class LoadWishlistController : Controller
    {
        // 控制器建構函數，注入資料庫上下文
        private readonly lookdaysContext _context;

        public LoadWishlistController(lookdaysContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [HttpPost]
        public IActionResult WishlistLoad(int UserId)
        {
            if (UserId <= 0)
                return BadRequest("無效的用戶ID");

            try
            {
                    //loadwishlist (載入願望清單資料)
                    
                    var loadwishlist = from r in _context.Bookings
                                      where r.UserId == UserId && r.BookingStatesId == 2
                                      select r;

                    if (!loadwishlist.Any())
                    {
                        return NotFound("未找到相關的願望清單資料");
                    }

                return Ok(loadwishlist);
            }
            catch (Exception ex)
            {
                // 記錄例外訊息
                // _logger.LogError(ex, "Error occurred while loading wishlist");

                return StatusCode(500, "內部伺服器錯誤");
            }
        }
    }
}
