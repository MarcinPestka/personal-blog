using System.ComponentModel.DataAnnotations.Schema;

namespace Web_Api.Model
{
    public class User
    {
        //Private contructor used by Entity Framework
        private User()
        {
        }
        public User(string userName, string password)
        {
            this.UserName = userName;
            this.PasswordHash = BCrypt.Net.BCrypt.HashPassword(password);
        }


        public int Id { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }
        public List<CompletedTopic> CompletedTopics { get; set; }

}
}
