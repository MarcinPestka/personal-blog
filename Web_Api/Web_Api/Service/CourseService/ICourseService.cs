using Microsoft.AspNetCore.Mvc;
using Web_Api.Model;

namespace Web_Api.Service.CourseService
{
    public interface ICourseService
    {
        Task<Course> GetCourseById(int Id);
        Task<IEnumerable<Course>> GetAllCourses();
        Task<IEnumerable<int>> GetCompletedTopicIds(int courseId, int userId);
        Task<CompletedTopic> CompleteTopic(CompletedTopicDTO completedTopic);
        Task<IActionResult> UnCompleteTopic(CompletedTopicDTO completedTopic);
        Task<IEnumerable<Course>> GetAllActiveCourses(int userId);
        Task<int> GetActiveCourseIdByTopicId(int topicId);
        Task<ActiveCourse> ActivateCourse(int userId, int courseId);
        Task<Course> AddCourse(CourseDTO course);
        Task<Section> AddNewSection(Section section);
        Task<IActionResult> DeleteSection(int sectionId);
        Task<IEnumerable<Section>> EditSection(Section section);
        Task<Topic> AddNewTopic(TopicDTO topic);
        Task<IActionResult> DeleteTopic(int topicId);
        Task<Lecture> AddNewLecture(LectureDTO lecture);
        Task<IActionResult> DeleteLecture(int lectureId);
    }
}
