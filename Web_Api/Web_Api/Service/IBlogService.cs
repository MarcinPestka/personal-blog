using Web_Api.Model;

namespace Web_Api.Service
{
    public interface IBlogService
    {
        Task<Post> GetPostById(int Id);
        Task<Post> AddPost(Post post);
    }
}
