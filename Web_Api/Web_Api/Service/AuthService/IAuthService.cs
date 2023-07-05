using Web_Api.Model.User;

namespace Web_Api.Service.AuthService
{
    public interface IAuthService
    {
        Task<User> Register(User user);
        Task<bool> Login(UserDTO user);
        string CreateToken(UserDTO user);
    }
}
