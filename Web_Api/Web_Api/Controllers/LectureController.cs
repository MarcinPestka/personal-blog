using Microsoft.AspNetCore.Mvc;
using Web_Api.Model;
using Web_Api.Service.Blog;
using Web_Api.Service.CourseService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LectureController : ControllerBase
    {
        private readonly ICourseService courseService;
        public LectureController(ICourseService courseService)
        {
            this.courseService = courseService;
        }

        [HttpGet]
        public Task<Course> GetLectureById(int Id)
        {
            return this.courseService.GetCourseById(Id);
        }

        [HttpGet("GetAllLectures")]
        public Task<IEnumerable<Course>> GetAllPosts()
        {
            return this.courseService.GetAllCourses();
        }

        [HttpPost]
        public Task<Course> AddPost(Course course)
        {
            var res = this.courseService.AddCourse(course);
            return res;
        }
    }
}
