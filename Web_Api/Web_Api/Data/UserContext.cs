using Microsoft.EntityFrameworkCore;
using Web_Api.Enumerables;
using Web_Api.Model;
using Web_Api.Model.User;

namespace Web_Api.Data
{
    public class UserContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            var serverVersion = new MySqlServerVersion(new Version(8, 0, 32));
            optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=rootpassword;database=contactsdb", serverVersion);
        }
    }
}
