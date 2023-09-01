using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Web_Api.Model;
using Web_Api.Service.Blog;
using Web_Api.Service.CourseService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService courseService;
        public CourseController(ICourseService courseService)
        {
            this.courseService = courseService;
        }

        [HttpGet]
        public Task<Course> GetCourseById(int Id)
        {
            return this.courseService.GetCourseById(Id);
        }

        [HttpGet("GetAllCourses")]
        public Task<IEnumerable<Course>> GetAllCourses()
        {
            return this.courseService.GetAllCourses();
        }

        [HttpGet("GetCourseIdByTopicId")]
        public Task<int> GetCourseIdByTopicId(int topicId)
        {
            return this.courseService.GetActiveCourseIdByTopicId(topicId);
        }

        [HttpGet("GetAllActiveCourses")]
        [Authorize]
        public Task<IEnumerable<Course>> GetAllActiveCourses()
        {
            int userId = Int32.Parse(HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));

            return this.courseService.GetAllActiveCourses(userId);
        }

        [HttpPost("ActivateCourse")]
        public Task<ActiveCourse> ActivateCourse(int userId, int topicId)
        {
            return this.courseService.ActivateCourse(userId,topicId);
        }

        [HttpPost]
        public Task<Course> AddCourse(CourseDTO course)
        {
            var res = this.courseService.AddCourse(course);
            return res;
        }

        [HttpGet("GetActiveCourseId")]
        public Task<int> GetActiveCourseId(int coruseId)
        {
            int userId = Int32.Parse(HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
            return this.courseService.GetActiveCourseId(userId, coruseId);
        }
    }
}
