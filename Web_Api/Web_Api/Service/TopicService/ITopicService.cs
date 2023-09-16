using Microsoft.AspNetCore.Mvc;
using Web_Api.Model;

namespace Web_Api.Service.TopicService
{
    public interface ITopicService
    {
        Task<IEnumerable<int>> GetCompletedTopicIds(int courseId, int userId);
        Task<IEnumerable<int>> CompleteTopic(CompletedTopicDTO completedTopic);
        Task<IActionResult> UnCompleteTopic(CompletedTopicDTO completedTopic);
        Task<IEnumerable<Topic>> AddNewTopic(TopicDTO topic);
        Task<IEnumerable<Topic>> DeleteTopic(int topicId);
        Task<IEnumerable<Topic>> EditSection(TopicDTO topic);
        Task<Topic> AddLastActiveTopic(LastTopicDTO topic);
        Task<Topic> GetLastActiveTopic(int activeCourseId);
    }
}
