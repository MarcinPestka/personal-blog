using Microsoft.EntityFrameworkCore;
using Web_Api.Enumerables;
using Web_Api.Model;
using Web_Api.Model.Post;

namespace Web_Api.Data
{
    public class BlogContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }
        public DbSet<Section> Sections { get; set; }
        public DbSet<Lecture> Lectures { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<LastTopic> LastTopic { get; set; }
        public DbSet<CompletedTopic> CompletedTopic { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<ActiveCourse> ActiveCourses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            var serverVersion = new MySqlServerVersion(new Version(8, 0, 32));
            optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=rootpassword;database=contactsdb", serverVersion);
        }
    }
}
