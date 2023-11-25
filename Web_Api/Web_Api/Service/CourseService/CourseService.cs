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
            LectureDTO placeHolderLecture = new LectureDTO() { Title = "Placeholder",Description="desc",CourseId=1,Content="content", Order = 1 };
            _course.Lectures = new Lecture[1] { new Lecture(placeHolderLecture)};

            await context.SaveChangesAsync();

            return await context.Courses.Where(x=>x.Id == _course.Id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Course>> GetAllCourses()
        {
            return await context.Courses
                .Include(p => p.Lectures)
                .ThenInclude(p => p.Topics)
                .ThenInclude(p => p.Sections).ToArrayAsync();
        }

        public async Task<Course> GetCourseById(int Id)
        {
            return await context.Courses.Where(p => p.Id == Id)
                .Include(p => p.Lectures)
                .ThenInclude(p => p.Exam)
                .ThenInclude(p => p.Questions)
                .ThenInclude(p => p.Answears)
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

        public async Task<int> GetActiveCourseId(int userId, int courseId)
        {
            return await context.ActiveCourses.Where(x => x.CourseId == courseId && x.UserId == userId).Select(x => x.Id).FirstOrDefaultAsync();
        }
    }
}
