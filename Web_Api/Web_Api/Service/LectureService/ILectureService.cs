using Web_Api.Model;

namespace Web_Api.Service.LectureService
{
    public interface ILectureService
    {
        Task<IEnumerable<Lecture>> AddNewLecture(LectureDTO lecture);
        Task<IEnumerable<Lecture>> DeleteLecture(int lectureId);
        Task<IEnumerable<Lecture>> EditLecture(LectureDTO lecture);
    }
}
