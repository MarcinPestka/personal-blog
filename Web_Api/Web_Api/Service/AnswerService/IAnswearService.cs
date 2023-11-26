using Web_Api.Model;

namespace Web_Api.Service.ExamService
{
    public interface IAnswearService
    {
        Task<Answear> AddAnswear(AnswearDTO answear);
        Task EditAnswear(AnswearDTO answear);
    }
}
