using Microsoft.AspNetCore.Mvc;
using Web_Api.Model;
using Web_Api.Service.Blog;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostController : ControllerBase
    {
        private readonly IBlogService blogService;
        public PostController(IBlogService blogService)
        {
            this.blogService = blogService;
        }

        [HttpGet]
        public Task<Post> GetPostById(int Id)
        {
            return this.blogService.GetPostById(Id);
        }

        [HttpGet("GetAllPosts")]
        public Task<IEnumerable<Post>> GetAllPosts()
        {
            return this.blogService.GetAllPosts();
        }

        [HttpGet("GetFeaturedPosts")]
        public Task<IEnumerable<Post>> GetFeaturedPosts()
        {
            return this.blogService.GetFeaturedPosts();
        }

        [HttpPost]
        public Task<Post> AddPost(Post post)
        {
            var res = this.blogService.AddPost(post);
            return res;
        }
    }
}
