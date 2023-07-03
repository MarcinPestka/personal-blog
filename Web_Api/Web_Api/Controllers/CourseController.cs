using Microsoft.AspNetCore.Mvc;
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

        [HttpPost]
        public Task<Course> AddCourse(Course course)
        {
            var res = this.courseService.AddCourse(course);
            return res;
        }
    }
}
