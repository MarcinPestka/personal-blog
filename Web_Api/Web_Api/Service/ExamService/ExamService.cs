using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Model;

namespace Web_Api.Service.ExamService
{
    public class ExamService : IExamService
    {
        private readonly BlogContext context;
        public ExamService(BlogContext context)
        {
            this.context = context;
        }

        public async Task<Exam> AddExam(ExamDTO exam)
        {
            Exam _exam = new Exam(exam);
            context.Exams.Add(_exam);

            await context.SaveChangesAsync();

            return await context.Exams.Where(x => x.Id == _exam.Id).FirstOrDefaultAsync();
        }

        public async Task<Exam> GetExamById(int Id)
        {
            return await context.Exams.Where(p => p.Id == Id)
                .Include(p => p.Questions)
                .ThenInclude(p => p.Answears)
                .FirstOrDefaultAsync();
        }
    }
}
