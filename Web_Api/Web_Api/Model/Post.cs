namespace Web_Api.Model
{
    public class Post
    {

        public int Id { get; set; }
        public DateTime PublishDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int AuthorId { get; set; }
        public string Content { get; set; }
        public ICollection<Section> Sections { get; set; }

        public Post(DateTime publishDate, string title, string description, string content)
        {
            PublishDate = publishDate;
            Title = title;
            Description = description;
            Content = content;
        }
        public Post(DateTime publishDate, string title, string description, string content, ICollection<Section> sections)
        {
            PublishDate = publishDate;
            Title = title;
            Description = description;
            Content = content;
            Sections = sections;
        }
    }
}
