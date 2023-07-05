using System.ComponentModel.DataAnnotations.Schema;

namespace Web_Api.Model.User
{
    public class User
    {
        //Private contructor used by Entity Framework
        private User()
        {
        }
        public User(string userName, string password)
        {
            this.userName = userName;
            this.passwordHash = BCrypt.Net.BCrypt.HashPassword(password);
        }


        public int Id { get; set; }
        public string userName { get; set; }
        public string passwordHash { get; set; }

    }
}
