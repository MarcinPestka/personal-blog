using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Web_Api.Model;
using Web_Api.Service.ExamService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionService questionService;
        public QuestionController(IQuestionService questionService)
        {
            this.questionService = questionService;
        }

        [HttpPost]
        [Authorize]
        public Task<IEnumerable<Question>> AddNewQuestion(QuestionDTO question)
        {
            return this.questionService.AddQuestion(question);
        }
        [HttpPut]
        [Authorize]
        public Task EditQuestion(QuestionDTO question)
        {
            return this.questionService.EditQuestion(question);
        }

    }
}
