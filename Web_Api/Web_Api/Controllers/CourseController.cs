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

        [HttpGet("GetCompletedTopicIds")]
        [Authorize]
        public Task<IEnumerable<int>> GetCompletedTopicIds(int courseId)
        {
            int userId = Int32.Parse(HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));

            return this.courseService.GetCompletedTopicIds(userId, courseId);
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

        [HttpPost("CompleteTopic")]
        [Authorize]
        public Task<CompletedTopic> CompleteTopic(CompletedTopicDTO completedTopic)
        {

            return this.courseService.CompleteTopic(completedTopic);
        }

        [HttpDelete("UnCompleteTopic")]
        [Authorize]
        public Task<IActionResult> UnCompleteTopic(CompletedTopicDTO completedTopic)
        {
            return this.courseService.UnCompleteTopic(completedTopic);
        }

        [HttpDelete("DeleteSection")]
        [Authorize]
        public Task<IActionResult> DeleteSection(int sectionId)
        {
            return this.courseService.DeleteSection(sectionId);
        }

        [HttpPut("EditSection")]
        [Authorize]
        public Task<IEnumerable<Section>> EditSection(Section section)
        {
            return this.courseService.EditSection(section);
        }

        [HttpPost("AddNewSection")]
        [Authorize]
        public Task<Section> AddNewSection(Section section)
        {
            return this.courseService.AddNewSection(section);
        }

        [HttpPost("AddNewTopic")]
        [Authorize]
        public Task<Topic> AddNewTopic(TopicDTO topic)
        {
            return this.courseService.AddNewTopic(topic);
        }

        [HttpDelete("DeleteTopic")]
        [Authorize]
        public Task<IActionResult> DeleteTopic(int topicId)
        {
            return this.courseService.DeleteTopic(topicId);
        }
        [HttpPost("AddNewLecture")]
        [Authorize]
        public Task<Lecture> AddNewLecture(LectureDTO lecture)
        {
            return this.courseService.AddNewLecture(lecture);
        }

        [HttpDelete("DeleteLecture")]
        [Authorize]
        public Task<IActionResult> DeleteLecture(int lectureId)
        {
            return this.courseService.DeleteLecture(lectureId);
        }
    }
}
