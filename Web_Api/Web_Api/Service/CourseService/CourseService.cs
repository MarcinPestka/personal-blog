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

        public async Task<Course> AddCourse(CourseDTO course)
        {
            Course _course = new Course(course);
            context.Courses.Add(_course);
            await context.SaveChangesAsync();

            return await context.Courses.Where(x=>x.Id == _course.Id).FirstOrDefaultAsync();
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

        public async Task<Section> AddNewSection(Section section)
        {
            IEnumerable<Section> sections = await context.Sections.Where(x => x.TopicId == section.TopicId && x.SectionOrder >= section.SectionOrder).ToArrayAsync();
            foreach (var s in sections)
            {
                s.SectionOrder = s.SectionOrder + 1;
            }

            context.Sections.Add(section);
            await context.SaveChangesAsync();
            return section;
        }

        public async Task<IActionResult> DeleteSection(int sectionId)
        {
            Section section = await context.Sections.Where(x => x.Id== sectionId).FirstOrDefaultAsync();
            context.Sections.Remove(section);

            IEnumerable<Section> sections = await context.Sections.Where(x => x.TopicId == section.TopicId && x.SectionOrder > section.SectionOrder).ToArrayAsync();
            foreach (var s in sections)
            {
                s.SectionOrder = s.SectionOrder - 1;
            }

            await context.SaveChangesAsync();
            return new OkResult();
        }

        public async Task<IEnumerable<Section>> EditSection(Section section)
        {
            Section _section = await context.Sections.Where(x => x.Id == section.Id).FirstOrDefaultAsync();
            if (_section.SectionOrder > section.SectionOrder)
            {
                IEnumerable<Section> sections = await context.Sections.Where(x => x.TopicId == section.TopicId && x.SectionOrder >= section.SectionOrder && x.SectionOrder <= _section.SectionOrder).ToArrayAsync();
                foreach (var s in sections)
                {
                    s.SectionOrder = s.SectionOrder + 1;
                }
            }
            else
            {
                IEnumerable<Section> sections = await context.Sections.Where(x => x.TopicId == section.TopicId && x.SectionOrder <= section.SectionOrder && x.SectionOrder >= _section.SectionOrder).ToArrayAsync();
                foreach (var s in sections)
                {
                    s.SectionOrder = s.SectionOrder - 1;
                }
            }
            
            context.Entry(_section).CurrentValues.SetValues(section);
            await context.SaveChangesAsync();
            return await context.Sections.Where(x => x.TopicId == section.TopicId).ToArrayAsync();
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
            Topic topic = await context.Topics.Where(x => x.Id == topicId).Include(x=>x.Sections).FirstOrDefaultAsync();

            context.Topics.Remove(topic);
            await context.SaveChangesAsync();
            return new OkResult();
        }

        public async Task<Lecture> AddNewLecture(LectureDTO lecture)
        {
            Lecture _lecture = new Lecture(lecture);
            context.Lectures.Add(_lecture);
            await context.SaveChangesAsync();
            return _lecture;
        }

        public async Task<IActionResult> DeleteLecture(int lectureId)
        {
            Lecture lecture = await context.Lectures.Where(x => x.Id == lectureId).Include(x => x.Topics).ThenInclude(x=>x.Sections).FirstOrDefaultAsync();

            context.Lectures.Remove(lecture);
            await context.SaveChangesAsync();
            return new OkResult();
        }

        public async Task<int> GetActiveCourseId(int userId, int courseId)
        {
            return await context.ActiveCourses.Where(x => x.CourseId == courseId && x.UserId == userId).Select(x => x.Id).FirstOrDefaultAsync();
        }
    }
}
