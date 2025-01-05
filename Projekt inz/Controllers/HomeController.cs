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

        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        public IActionResult SellOrRent()
        {
            return View("SellOrRent/SellOrRent");
        }

        public IActionResult Sell()
        {
            return View("SellOrRent/Sell/Sell");
        }

        public IActionResult Rent()
        {
            return View("SellOrRent/Rent/Rent");
        }      

        public IActionResult ResultPage()
        {
            return View();
        }

        public IActionResult SearchResults(string location, string propertyType, string saleType, decimal? priceMin, decimal? priceMax, decimal? surfaceMin, decimal? surfaceMax)
        {
            // Zastąpienie tej zmiennej rzeczywistymi danymi nieruchomości
            var nieruchomosci = new List<Nieruchomosc>
        {
            new Nieruchomosc { adres = "ul. Spitalna, Kołobrzeg", type = "Mieszkania", saleType = "Sprzedaż", cena = 250000, surface = 50 },
            new Nieruchomosc { adres = "ul. Główna, Warszawa", type = "Domy", saleType = "Wynajem", cena = 3500, surface = 120 },
            new Nieruchomosc { adres = "ul. Molyn, Kołobrzeg", type = "Mieszkania", saleType = "Sprzedaż", cena = 259890, surface = 50 },
            new Nieruchomosc { adres = "kjfvndijn", type = "Diałki", saleType = "Wynajem", cena = 35657600, surface = 120 },
            // Dodaj inne przykłady danych nieruchomości
        };

            // Filtrowanie danych nieruchomości na podstawie parametrów przesłanych z formularza
            var filteredProperties = nieruchomosci.Where(p =>
                (!string.IsNullOrEmpty(propertyType) && p.type.Contains(propertyType)) &&
                (priceMin.HasValue && p.cena >= priceMin) &&
                (priceMax.HasValue && p.cena <= priceMax)
            ).ToList();

            // Przekazujemy przefiltrowane wyniki do widoku
            return View("ResultPage", filteredProperties);
        }

        public IActionResult UserAccount()
        {
            return View("User/UserAccount");
        }

        public IActionResult UserSetting()
        {
            return View("User/UserSetting");
        }

        public IActionResult UserMessage()
        {
            return View("User/UserMessage");
        }

        public IActionResult ForgotPassword()
        {
            return View();
        }

        public IActionResult Announcement()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}