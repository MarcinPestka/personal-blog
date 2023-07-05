using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Web_Api.Data;
using Web_Api.Model.User;

namespace Web_Api.Service.AuthService
{
    public class AuthService : IAuthService
    {
        private readonly UserContext context;
        public AuthService(UserContext context)
        {
            this.context = context;
        }

        public string CreateToken(UserDTO user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.userName)
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
            return await context.Users.Where(x => x.userName == user.userName).FirstOrDefaultAsync();
        }

        public async Task<bool> Login(UserDTO user)
        {
           User user2 = await context.Users.Where(x => x.userName == user.userName).FirstOrDefaultAsync();

           if (BCrypt.Net.BCrypt.Verify(user.password, user2.passwordHash))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
