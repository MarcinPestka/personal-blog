using Microsoft.AspNetCore.Mvc;
using Web_Api.Model;

namespace Web_Api.Service.CourseService
{
    public interface ICourseService
    {
        Task<Course> GetCourseById(int Id);
        Task<IEnumerable<Course>> GetAllCourses();
        Task<IEnumerable<Course>> GetAllActiveCourses(int userId);
        Task<int> GetActiveCourseIdByTopicId(int topicId);
        Task<int> GetActiveCourseId(int userId, int courseId);
        Task<ActiveCourse> ActivateCourse(int userId, int courseId);
        Task<Course> AddCourse(CourseDTO course);
    }
}
