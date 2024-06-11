using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Controllers
{

    //點擊加入願望清單(SAVE)

    // 設定路由為 "api/Activities"
    [Route("api/[controller]")]
    [ApiController]

    public class AddToWishlistController : Controller
    {
        private readonly lookdaysContext _context;

        public AddToWishlistController(lookdaysContext context)
        {
            //檢查 _context 是否為 Null：
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }


        [HttpPost]
        public IActionResult WishlistSave(int? UserId, int? ActivityId)
        {
            if (UserId == null)
                return BadRequest("請登入會員");
            if (ActivityId == null)
                return BadRequest("DB沒此活動ID");

            try
                {
                    //productPrices 從DB找商品價格
                    var productPrices = (from r in _context.Activities
                                     where r.ActivityId == ActivityId
                                     select r.Price).FirstOrDefault();

                if (productPrices == null)
                {
                    return NotFound("未找到商品價格");
                }

                // 建立新的 Bookings 物件並設置屬性值
                Booking newBooking = new Booking()
                {
                    UserId = (int)UserId, // 替換為獲取當前用戶ID的方法
                    ActivityId = (int)ActivityId, // 使用 FrmProduct 中的 ActivityID
                    BookingDate = DateTime.Now, // 使用當前日期時間作為預訂日期
                    Price = Convert.ToDecimal(productPrices), // 使用介面元件上的價格資訊
                    BookingStatesId = 2, // 替換為預設的預訂狀態ID
                    Member = 1
                };



                // 將新的 Bookings 物件添加到資料庫中
                using (var db = new lookdaysContext()) //change
                {
                    _context.Bookings.Add(newBooking);
                    _context.SaveChanges();
                }

                return Ok("success");
            }
            catch (Exception ex)
            {
                // 記錄例外訊息（可選）
                // _logger.LogError(ex, "Error occurred while adding booking to wishlist");

                return StatusCode(500, "內部伺服器錯誤");
            }
        }
    }
}
