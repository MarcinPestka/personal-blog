using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Web_Api.Data;
using Web_Api.Model;

namespace Web_Api.Service.AuthService
{
    public class AuthService : IAuthService
    {
        private readonly BlogContext context;
        public AuthService(BlogContext context)
        {
            this.context = context;
        }

        public string CreateToken(UserDTO user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
            };

            //Move key to the KEY VAULT
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("gtrerfrthyr6543rwergty67u45tfefdurgijw3edjiofrgjufe"));
            
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credentials
                );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        public async Task<User> Register(User user)
        {
            context.Add(user);
            context.SaveChanges();
            return await context.Users.Where(x => x.UserName == user.UserName).FirstOrDefaultAsync();
        }

        public async Task<bool> Login(UserDTO user)
        {
           User user2 = await context.Users.Where(x => x.UserName == user.UserName).FirstOrDefaultAsync();

           if (BCrypt.Net.BCrypt.Verify(user.Password, user2.PasswordHash))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public async Task<int> GetUserId(string userName)
        {
            return await context.Users.Where(x => x.UserName == userName).Select(x => x.Id).FirstOrDefaultAsync();
        }

        public async Task<UserDTO> GetUserDetails(int userId)
        {
            User user = await context.Users.Where(x => x.Id == userId).FirstOrDefaultAsync();
            UserDTO userDTO = new UserDTO() {FirstName = user.FirstName, LastName = user.LastName };
            return userDTO;
        }
    }
}
