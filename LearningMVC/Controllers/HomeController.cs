using LearningMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LearningMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Msg = "MVC Rocks";
            return View();
        }

        public ActionResult About()
        {
            var about = new AboutModel();
            about.Name = "Sagar Thapa";
            about.Location = "Oxford";
            return View(about);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}