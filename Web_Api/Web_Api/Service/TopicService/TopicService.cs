using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Migrations;
using Web_Api.Model;
using static System.Collections.Specialized.BitVector32;

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

        public async Task<IEnumerable<Topic>> AddNewTopic(TopicDTO topic)
        {
            IEnumerable<Topic> topics = await context.Topics.Where(x => x.LectureId == topic.LectureId && x.TopicOrder >= topic.TopicOrder).ToArrayAsync();
            foreach (var t in topics)
            {
                t.TopicOrder = t.TopicOrder + 1;
            }

            Topic _topic = new Topic(topic);
            context.Topics.Add(_topic);

            await context.SaveChangesAsync();
            return await context.Topics.Where(x => x.LectureId == topic.LectureId).ToArrayAsync();
        }

        public async Task<IEnumerable<Topic>> DeleteTopic(int topicId)
        {
            Topic topic = await context.Topics.Where(x => x.Id == topicId).Include(x=>x.Sections).FirstOrDefaultAsync();
            context.Topics.Remove(topic);

            IEnumerable<Topic> topics = await context.Topics.Where(x => x.LectureId == topic.LectureId && x.TopicOrder > topic.TopicOrder).ToArrayAsync();
            foreach (var t in topics)
            {
                t.TopicOrder = t.TopicOrder - 1;
            }

            await context.SaveChangesAsync();
            return await context.Topics.Where(x => x.LectureId == topic.LectureId).ToArrayAsync();
        }

        public async Task<IEnumerable<Topic>> EditSection(TopicDTO topic)
        {
            Topic _topic = await context.Topics.Where(x => x.Id == topic.Id).FirstOrDefaultAsync();

            if (_topic.TopicOrder > topic.TopicOrder)
            {
                IEnumerable<Topic> topics = await context.Topics.Where(x => x.LectureId == topic.LectureId && x.TopicOrder >= topic.TopicOrder && x.TopicOrder <= _topic.TopicOrder).ToArrayAsync();
                foreach (var t in topics)
                {
                    t.TopicOrder = t.TopicOrder + 1;
                }
            }
            else
            {
                IEnumerable<Topic> topics = await context.Topics.Where(x => x.LectureId == topic.LectureId && x.TopicOrder <= topic.TopicOrder && x.TopicOrder >= _topic.TopicOrder).ToArrayAsync();
                foreach (var t in topics)
                {
                    t.TopicOrder = t.TopicOrder - 1;
                }
            }

            context.Entry(_topic).CurrentValues.SetValues(topic);
            await context.SaveChangesAsync();
            return await context.Topics.Where(x => x.LectureId == topic.LectureId).ToArrayAsync();
        }
    }
}
