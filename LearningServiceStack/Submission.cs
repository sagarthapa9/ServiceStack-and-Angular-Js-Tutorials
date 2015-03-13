using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LearningServiceStack
{
  [Route("/Submission","POST")]
    public class Submission
    {
        public  int Id { get; set; }
        public DateTime SubmissionTime { get; set; }
        public string Headline { get; set; }
        public string Body { get; set; }

    }
    public class SubmissionResponse
    {

        public int Id { get; set; }
    
    }
}