using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Web_Api.Model;
using Web_Api.Service.ExamService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AnswearController : ControllerBase
    {
        private readonly IAnswearService answearService;
        public AnswearController(IAnswearService answearService)
        {
            this.answearService = answearService;
        }

        [HttpPost]
        [Authorize]
        public Task<Answear> AddNewQuestion(AnswearDTO answaer)
        {
            return this.answearService.AddAnswear(answaer);
        }

        [HttpPut]
        [Authorize]
        public Task EditAnswear(AnswearDTO answaer)
        {
            return this.answearService.EditAnswear(answaer);
        }
    }
}
