using Web_Api.Model;

namespace Web_Api.Service.CourseService
{
    public interface ICourseService
    {
        Task<Course> GetCourseById(int Id);
        Task<IEnumerable<Course>> GetAllCourses();
        Task<Course> AddCourse(Course course);
    }
}
