using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Web_Api.Model;
using Web_Api.Service.Blog;
using Web_Api.Service.CourseService;
using Web_Api.Service.TopicService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TopicController : ControllerBase
    {
        private readonly ITopicService topicService;
        public TopicController(ITopicService topicService)
        {
            this.topicService = topicService;
        }

        [HttpGet("GetCompletedTopicIds")]
        [Authorize]
        public Task<IEnumerable<int>> GetCompletedTopicIds(int courseId)
        {
            int userId = Int32.Parse(HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));

            return this.topicService.GetCompletedTopicIds(userId, courseId);
        }

        [HttpPost("CompleteTopic")]
        [Authorize]
        public Task<IEnumerable<int>> CompleteTopic(CompletedTopicDTO completedTopic)
        {

            return this.topicService.CompleteTopic(completedTopic);
        }

        [HttpDelete("UnCompleteTopic")]
        [Authorize]
        public Task<IActionResult> UnCompleteTopic(CompletedTopicDTO completedTopic)
        {
            return this.topicService.UnCompleteTopic(completedTopic);
        }

        [HttpPost("AddNewTopic")]
        [Authorize]
        public Task<IEnumerable<Topic>> AddNewTopic(TopicDTO topic)
        {
            return this.topicService.AddNewTopic(topic);
        }

        [HttpDelete("DeleteTopic")]
        [Authorize]
        public Task<IEnumerable<Topic>> DeleteTopic(int topicId)
        {
            return this.topicService.DeleteTopic(topicId);
        }
        
        [HttpPut("EditTopic")]
        [Authorize]
        public Task<IEnumerable<Topic>> EditTopic(TopicDTO topic)
        {
            return this.topicService.EditSection(topic);
        }

        [HttpPost("AddLastTopic")]
        [Authorize]
        public Task<Topic> AddLastActiveTopic(LastTopicDTO lastTopic)
        {
            return this.topicService.AddLastActiveTopic(lastTopic);
        }

    }
}
