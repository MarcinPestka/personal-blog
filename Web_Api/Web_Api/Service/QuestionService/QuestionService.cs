using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Model;

namespace Web_Api.Service.ExamService
{
    public class QuestionService : IQuestionService
    {
        private readonly BlogContext context;
        public QuestionService(BlogContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Question>> AddQuestion(QuestionDTO question)
        {
            Question _question = new Question(question);
            context.Questions.Add(_question);

            await context.SaveChangesAsync();

            return await context.Questions.Where(x => x.ExamId == question.ExamId).ToListAsync();
        }

        public async Task EditQuestion(QuestionDTO question)
        {
            Question _question = await context.Questions.Where(x => x.Id == question.Id).FirstOrDefaultAsync();

            _question.QuestionText = question.QuestionText;

            //context.Entry(_question).CurrentValues.SetValues(_question);
            await context.SaveChangesAsync();
        }
    }
}
