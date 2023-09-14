using Web_Api.Model.Post;

namespace Web_Api.Service.Blog
{
    public interface IBlogService
    {
        Task<Post> GetPostById(int Id);
        Task<IEnumerable<Post>> GetAllPosts();
        Task<IEnumerable<Post>> GetFeaturedPosts();
        Task<Post> AddPost(Post post);
    }
}
