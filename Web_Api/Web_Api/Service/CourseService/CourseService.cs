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

            return await context.Courses.FirstOrDefaultAsync();
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
                .ThenInclude(p => p.Topics)
                .ThenInclude(p=> p.Sections)
                .FirstOrDefaultAsync();
        }
    }
}
