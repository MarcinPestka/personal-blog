using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web_Api.Model.User;
using Web_Api.Service.AuthService;
using Web_Api.Service.CourseService;

namespace Web_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        
        private readonly IAuthService authService;
        public AuthController(IAuthService authService)
        {
            this.authService = authService;
        }

        [HttpPost("Login")]
        public async Task<ActionResult> Login(UserDTO user)
        {
            bool correctLogOn = await this.authService.Login(user);
            string token = this.authService.CreateToken(user);
            
            if (correctLogOn)
            {
                return Ok(token);
            }
            else
            {
                return BadRequest("Email lub hasło są błędne");
            }
        }

        [HttpPost("Register")]
        public ActionResult<User> Register(UserDTO user) {
            User _user = new User(user.userName,user.password);

            this.authService.Register(_user);
            return Ok(_user);
        }
    }
}
