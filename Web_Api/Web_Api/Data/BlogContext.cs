﻿using Microsoft.EntityFrameworkCore;
using Web_Api.Enumerables;
using Web_Api.Model;

namespace Web_Api.Data
{
    public class BlogContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }
        public DbSet<Section> Section { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            var serverVersion = new MySqlServerVersion(new Version(8, 0, 32));
            optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=rootpassword;database=contactsdb", serverVersion);
        }
    }
}
