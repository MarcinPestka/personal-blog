using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Model;

namespace Web_Api.Service.Blog
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
            return await context.Posts.Where(p => p.Id == Id).Include(p => p.Sections).FirstOrDefaultAsync();
        }
        public async Task<IEnumerable<Post>> GetAllPosts()
        {
            return await context.Posts.ToArrayAsync();
        }
        public async Task<IEnumerable<Post>> GetFeaturedPosts()
        {
            return await context.Posts.Where(p => p.Featured).ToArrayAsync();
        }
        public async Task<Post> AddPost(Post post)
        {
            context.Posts.Add(post);
            await context.SaveChangesAsync();

            return await context.Posts.FirstOrDefaultAsync();
        }
    }
}
