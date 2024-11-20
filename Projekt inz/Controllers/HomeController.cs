using Microsoft.AspNetCore.Mvc;
using Projekt_inz.Models;
using System.Diagnostics;

namespace Projekt_inz.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        // Akcja Login
        public IActionResult Login()
        {
            return View();
        }

        // Akcja rejestracja
        public IActionResult Register()
        {
            return View();
        }

        public IActionResult SellOrRent()
        {
            return View("SellOrRent/SellOrRent");
        }

        public IActionResult SellHouse()
        {
            return View("SellOrRent/Sell/SellHouse");
        }
        public IActionResult SellFlat()
        {
            return View("SellOrRent/Sell/SellFlat");
        }
        public IActionResult SellGarage()
        {
            return View("SellOrRent/Sell/SellGarage");
        }
        public IActionResult SellPlots()
        {
            return View("SellOrRent/Sell/SellPlots");
        }
        public IActionResult SellLocal()
        {
            return View("SellOrRent/Sell/SellLocal");
        }

        public IActionResult SellHall()
        {
            return View("SellOrRent/Sell/SellHall");
        }

        public IActionResult RentFlat()
        {
            return View("SellOrRent/Sell/SellHall");
        }
        public IActionResult RentPlots()
        {
            return View("SellOrRent/Rent/RentPlots");
        }
        public IActionResult RentLocal()
        {
            return View("SellOrRent/Rent/RentLocal");
        }
        public IActionResult RentHouse()
        {
            return View("SellOrRent/Rent/RentHouse");
        }
        public IActionResult RentRoom()
        {
            return View("SellOrRent/Rent/RentRoom");
        }
        public IActionResult RentGarage()
        {
            return View("SellOrRent/Rent/RentGarage");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}