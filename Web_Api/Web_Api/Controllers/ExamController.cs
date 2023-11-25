using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Web_Api.Model;
using Web_Api.Service.Blog;
using Web_Api.Service.CourseService;
using Web_Api.Service.ExamService;
using Web_Api.Service.LectureService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExamController : ControllerBase
    {
        private readonly IExamService examService;
        public ExamController(IExamService examService)
        {
            this.examService = examService;
        }

        [HttpPost]
        [Authorize]
        public Task<Exam> AddNewExam(ExamDTO exam)
        {
            return this.examService.AddExam(exam);
        }

        [HttpGet]
        [Authorize]
        public Task<Exam> GetExamById(int Id)
        {
            return this.examService.GetExamById(Id);
        }

        [HttpPost("Check")]
        [Authorize]
        public Task<double> CheckAnswears(CheckedAnswears checkedAnswears)
        {
            return this.examService.CheckAnswears(checkedAnswears);
        }


    }
}
