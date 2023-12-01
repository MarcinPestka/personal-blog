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

        public async Task<Question> AddQuestion(QuestionDTO question)
        {
            Question _question = new Question(question);
            context.Questions.Add(_question);

            await context.SaveChangesAsync();

            return await context.Questions.Where(x => x.Id == _question.Id).FirstOrDefaultAsync();
        }

        public async Task EditQuestion(QuestionDTO question)
        {
            Question _question = await context.Questions.Where(x => x.Id == question.Id).FirstOrDefaultAsync();

            _question.QuestionText = question.QuestionText;

            await context.SaveChangesAsync();
        }
         
        public async Task DeleteQuestion(int id)
        {
            Question question = await context.Questions.Where(x => x.Id == id).FirstOrDefaultAsync();
            context.Questions.Remove(question);

            await context.SaveChangesAsync();
        }
    }
}
