using Web_Api.Model;

namespace Web_Api.Service.ExamService
{
    public interface IExamService
    {
        Task<Exam> AddExam(ExamDTO exam);
        Task<Exam> GetExamById(int Id);
    }
}
