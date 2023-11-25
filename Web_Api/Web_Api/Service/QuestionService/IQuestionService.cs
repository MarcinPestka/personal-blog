using Web_Api.Model;

namespace Web_Api.Service.ExamService
{
    public interface IQuestionService
    {
        Task<Question> AddQuestion(QuestionDTO exam);
    }
}
