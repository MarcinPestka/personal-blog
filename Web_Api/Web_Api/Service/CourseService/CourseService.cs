using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using Web_Api.Data;
using Web_Api.Model;
using Web_Api.Service.CourseService;

namespace Web_Api.Service.Blog
{
    public class CourseService : ICourseService
    {
        private readonly BlogContext context;
        public CourseService(BlogContext context)
        {
            this.context = context;
        }

        public async Task<Course> AddCourse(Course course)
        {
            context.Courses.Add(course);
            await context.SaveChangesAsync();

            return await context.Courses.Where(x=>x.Id == course.Id).FirstOrDefaultAsync();
        }

        public async Task<CompletedTopic> CompleteTopic(CompletedTopicDTO completedTopic)
        {
            context.CompletedTopic.Add(new CompletedTopic(completedTopic));
            await context.SaveChangesAsync();

            return await context.CompletedTopic.Where(x => x.TopicId == completedTopic.TopicId).FirstOrDefaultAsync();
        }
        public async Task<IEnumerable<Course>> GetAllCourses()
        {
            return await context.Courses
                .Include(p => p.Lectures)
                .ThenInclude(p => p.Topics)
                .ThenInclude(p => p.Sections).ToArrayAsync();
        }

        public async Task<IEnumerable<int>> GetCompletedTopicIds(int userId, int courseId)
        {
            return await context.ActiveCourses.Where(x => x.CourseId == courseId && x.UserId == userId).SelectMany(x => x.CompletedTopics).Select(x=>x.TopicId).ToArrayAsync();
        }

        public async Task<Course> GetCourseById(int Id)
        {
            return await context.Courses.Where(p => p.Id == Id)
                .Include(p => p.Lectures)
                .ThenInclude(p => p.Topics)
                .ThenInclude(p=> p.Sections)
                .FirstOrDefaultAsync();
        }

        public async Task<int> GetActiveCourseIdByTopicId(int topicId)
        {
            return await context.Lectures.Where(x => x.Topics.Any(x => x.Id == topicId)).Select(x => x.CourseId).FirstOrDefaultAsync();
        }

        public async Task<ActiveCourse> ActivateCourse(int userId, int courseId)
        {
            ActiveCourse activeCourse = new ActiveCourse() { UserId = userId, CourseId = courseId };
            context.ActiveCourses.Add(activeCourse);
            await context.SaveChangesAsync();
            
            return activeCourse;
        }

        public async Task<IEnumerable<Course>> GetAllActiveCourses(int userId)
        {
            IEnumerable<int> activeCoursesId = await this.context.ActiveCourses.Where(x => x.UserId == userId).Select(x => x.CourseId).ToArrayAsync();
            return await this.context.Courses.Where(x => activeCoursesId.Any(y => y == x.Id)).ToArrayAsync();
        }

        public async Task<IActionResult> UnCompleteTopic(CompletedTopicDTO completedTopic)
        {
            CompletedTopic completed = await context.CompletedTopic.Where(x => x.TopicId == completedTopic.TopicId && x.ActiveCourseId == completedTopic.ActiveCourseId).FirstOrDefaultAsync();
            
            context.CompletedTopic.Remove(completed);
            await context.SaveChangesAsync();
            return new OkResult();
        }
    }
}
