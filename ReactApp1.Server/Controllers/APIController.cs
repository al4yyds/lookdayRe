using Microsoft.AspNetCore.Mvc;

namespace ReactApp1.Server.Controllers
{
    public class APIController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
