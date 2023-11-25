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
        public async Task<double> CheckAnswears(CheckedAnswears checkedAnswears)
        {
            Exam exam = await this.context.Exams.Where(x => x.Id == checkedAnswears.ExamId).Include(x=>x.Questions).FirstOrDefaultAsync();

            double test = checkedAnswears.AnswearPairs.Count(x =>
            {
                var question = exam.Questions.FirstOrDefault(y => y.Id == x.QuestionId);
                return question?.CorrectAnswearId == x.UserAnswear;
            });

            return Math.Round((test/(double)exam.Questions.Count())*100);
        }
    }
}
