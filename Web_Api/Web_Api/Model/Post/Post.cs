namespace Web_Api.Model.Post
{
    public class Post
    {
        public int Id { get; set; }
        public DateTime PublishDate { get; set; }
        public string Title { get; set; }
        public int AuthorId { get; set; }
        public string? Description { get; set; }
        public bool Featured { get; set; }
        public ICollection<Section>? Sections { get; set; }

        public Post()
        {
        }

        public Post(PostDTO post)
        {
            this.Title = post.Title;
            this.Description = post.Description;
            this.AuthorId = post.AuthorId;
        }
        public Post(DateTime publishDate, string title, string description, string content)
        {
            PublishDate = publishDate;
            Title = title;
            Description = description;
        }
        public Post(DateTime publishDate, string title, string description, string content, ICollection<Section> sections)
        {
            PublishDate = publishDate;
            Title = title;
            Description = description;
            Sections = sections;
        }
    }
}
