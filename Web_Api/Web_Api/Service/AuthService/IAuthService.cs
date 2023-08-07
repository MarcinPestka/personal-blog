using Web_Api.Model;

namespace Web_Api.Service.AuthService
{
    public interface IAuthService
    {
        Task<User> Register(User user);
        Task<bool> Login(UserDTO user);
        Task<int> GetUserId(string userName="");
        Task<UserDTO> GetUserDetails(int userId);
        string CreateToken(UserDTO user);
    }
}
