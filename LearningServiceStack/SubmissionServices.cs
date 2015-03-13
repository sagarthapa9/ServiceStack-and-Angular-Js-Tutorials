using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LearningServiceStack
{
    public class SubmissionServices:Service

    {
       
        public object Post(Submission Submission)
        {
            return new SubmissionResponse() { Id = 1 };
        
        }
    }
}