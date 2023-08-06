namespace Web_Api.Model
{
    public class CompletedTopic
    {
        public CompletedTopic()
        {
        }
        public CompletedTopic(CompletedTopicDTO completedTopic)
        {
            TopicId = completedTopic.TopicId;
            ActiveCourseId = completedTopic.ActiveCourseId;
        }
        public int Id { get; set; }
        public int TopicId { get; set; }
        public Topic Topic { get; set; }
        public int ActiveCourseId { get; set; }
        public ActiveCourse ActiveCourse { get; set; }
    }
}
