using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Web_Api.Model;
using Web_Api.Service.ExamService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuestionConroller : ControllerBase
    {
        private readonly IQuestionService questionService;
        public QuestionConroller(IQuestionService questionService)
        {
            this.questionService = questionService;
        }

        [HttpPost]
        [Authorize]
        public Task<Question> AddNewQuestion(QuestionDTO question)
        {
            return this.questionService.AddQuestion(question);
        }
    }
}
