using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Web_Api.Model;
using Web_Api.Service.Blog;
using Web_Api.Service.CourseService;
using Web_Api.Service.LectureService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LectureController : ControllerBase
    {
        private readonly ILectureService lectureService;
        public LectureController(ILectureService lectureService)
        {
            this.lectureService = lectureService;
        }
        [HttpDelete("DeleteLecture")]
        [Authorize]
        public Task<IEnumerable<Lecture>> DeleteLecture(int lectureId)
        {
            return this.lectureService.DeleteLecture(lectureId);
        }

        [HttpPut("EditLecture")]
        [Authorize]
        public Task<IEnumerable<Lecture>> EditLecture(LectureDTO lecture)
        {
            return this.lectureService.EditLecture(lecture);
        }

        [HttpPost("AddNewLecture")]
        [Authorize]
        public Task<IEnumerable<Lecture>> AddNewLecture(LectureDTO lecture)
        {
            return this.lectureService.AddNewLecture(lecture);
        }
    }
}
