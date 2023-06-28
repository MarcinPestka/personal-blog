using Web_Api.Model;

namespace Web_Api.Service.Blog
{
    public interface IBlogService
    {
        Task<Post> GetPostById(int Id);
        Task<IEnumerable<Post>> GetAllPosts();
        Task<Post> AddPost(Post post);
    }
}
