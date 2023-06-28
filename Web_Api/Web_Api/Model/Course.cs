namespace Web_Api.Model
{
    public class Course  
    {
        public int Id { get; set; }
        public DateTime PublishDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int AuthorId { get; set; }
        public string Content { get; set; }
        public ICollection<Lecture> Lectures { get; set; }
    }
}
