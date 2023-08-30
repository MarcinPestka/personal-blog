using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Model;

namespace Web_Api.Service.TopicService
{
    public class TopicService : ITopicService
    {
        private readonly BlogContext context;
        public TopicService(BlogContext context)
        {
            this.context = context;
        }

        public async Task<CompletedTopic> CompleteTopic(CompletedTopicDTO completedTopic)
        {
            context.CompletedTopic.Add(new CompletedTopic(completedTopic));
            await context.SaveChangesAsync();

            return await context.CompletedTopic.Where(x => x.TopicId == completedTopic.TopicId).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<int>> GetCompletedTopicIds(int userId, int courseId)
        {
            return await context.ActiveCourses.Where(x => x.CourseId == courseId && x.UserId == userId).SelectMany(x => x.CompletedTopics).Select(x => x.TopicId).ToArrayAsync();
        }

        public async Task<IActionResult> UnCompleteTopic(CompletedTopicDTO completedTopic)
        {
            CompletedTopic completed = await context.CompletedTopic.Where(x => x.TopicId == completedTopic.TopicId && x.ActiveCourseId == completedTopic.ActiveCourseId).FirstOrDefaultAsync();

            context.CompletedTopic.Remove(completed);
            await context.SaveChangesAsync();
            return new OkResult();
        }

        public async Task<Topic> AddNewTopic(TopicDTO topic)
        {
            Topic _topic = new Topic(topic);
            context.Topics.Add(_topic);
            await context.SaveChangesAsync();
            return _topic;
        }

        public async Task<IActionResult> DeleteTopic(int topicId)
        {
            Topic topic = await context.Topics.Where(x => x.Id == topicId).Include(x => x.Sections).FirstOrDefaultAsync();

            context.Topics.Remove(topic);
            await context.SaveChangesAsync();
            return new OkResult();
        }

    }
}
