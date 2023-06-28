using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Model;

namespace Web_Api.Service
{
    public class BlogService : IBlogService
    {
        private readonly BlogContext context;
        public BlogService(BlogContext context)
        {
            this.context = context;
        }
        
        public async Task<Post> GetPostById(int Id)
        {
            //db.Users.Include("Interests").Where(u => u.Interests.Any(i => i.TenantId == tenantId));
            return await this.context.Posts.Where(p => p.Id == Id).Include(p => p.Sections).FirstOrDefaultAsync();
        }
        public async Task<IEnumerable<Post>> GetAllPosts()
        {
            return await this.context.Posts.ToArrayAsync();
        }

        public async Task<Post> AddPost(Post post)
        {
            this.context.Posts.Add(post);
            await this.context.SaveChangesAsync();

            return await this.context.Posts.FirstOrDefaultAsync();
        }
    }
}
