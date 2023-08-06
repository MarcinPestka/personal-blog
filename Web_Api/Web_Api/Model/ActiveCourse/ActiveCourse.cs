namespace Web_Api.Model
{
    public class ActiveCourse
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int CourseId { get; set; }
        public Course Course { get; set; }
        public ICollection<CompletedTopic> CompletedTopics { get; set; }
    }
}
