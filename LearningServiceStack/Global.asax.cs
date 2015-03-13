using Funq;
using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace LearningServiceStack
{
    public class Global : System.Web.HttpApplication
    {
        /// <summary>
        /// Create your ServiceStack web service application with a singleton AppHost.
        /// </summary>        
        public class SubmissionAppHost : AppHostBase
        {
            /// <summary>
            /// Initializes a new instance of your ServiceStack application, with the specified name and assembly containing the services.
            /// </summary>
            public SubmissionAppHost() : base("Submission Services", typeof(SubmissionServices).Assembly) { }

            /// <summary>
            /// Configure the container with the necessary routes for your ServiceStack application.
            /// </summary>
            /// <param name="container">The built-in IoC used with ServiceStack.</param>
            public override void Configure(Container container)
            {
               
            }
        }


        protected void Application_Start(object sender, EventArgs e)
        {
            new SubmissionAppHost().Init();
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}