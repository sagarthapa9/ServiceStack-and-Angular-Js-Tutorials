using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LearningMVC.Controllers
{
    public class StoreController : Controller
    {
        // GET: Store
        public string Index()
        {
            return "Hello From store.Index";
        }


       //Get: /Store/Browse
        public string Browse(string genre)
        {
            string message = HttpUtility.HtmlEncode("Store.Browse, Genre=" + genre);
            return message;
        }

        //Get: /Store/Details
        public string Details(int id)
        {

            string message="Store.Details, id="+id;
            return message;
        }



    }
}