using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Web_Api.Model;
using Web_Api.Service.AuthService;
using Web_Api.Service.CourseService;

namespace Web_Api.Controllers
{
    [Route("[controller]")]
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
            user.Id = await authService.GetUserId(user.UserName);
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
        public async Task<ActionResult<User>> Register(UserDTO user) {
            User _user = new User(user.UserName,user.Password, user.FirstName,user.LastName);

            await this.authService.Register(_user);
            return Ok(_user);
        }

        [HttpGet("GetUserId")]
        [Authorize]
        public async Task<int> GetUserId()
        {
            string userName = HttpContext.User.Identity.Name;
            return await this.authService.GetUserId(userName);
        }

        [HttpGet("GetUserDetails")]
        [Authorize]
        public async Task<UserDTO> GetUserDetails()
        {
            int userId = Int32.Parse(HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
            return await this.authService.GetUserDetails(userId);
        }
    }
}
