﻿using Microsoft.AspNetCore.Mvc;
using Web_Api.Model;

namespace Web_Api.Service.TopicService
{
    public interface ITopicService
    {
        Task<IEnumerable<int>> GetCompletedTopicIds(int courseId, int userId);
        Task<CompletedTopic> CompleteTopic(CompletedTopicDTO completedTopic);
        Task<IActionResult> UnCompleteTopic(CompletedTopicDTO completedTopic);
        Task<IEnumerable<Topic>> AddNewTopic(TopicDTO topic);
        Task<IEnumerable<Topic>> DeleteTopic(int topicId);
    }
}
