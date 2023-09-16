namespace Web_Api.Model
{
    public class LastTopic
    {
        public int Id { get; set; }
        public int ActiveCourseId { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int TopicId { get; set; }
        public Topic Topic { get; set; }
        public int LectureId { get; set; }
        public Lecture Lecture { get; set; }


        public LastTopic()
        {

        }
        public LastTopic(LastTopicDTO lastTopic)
        {
            this.ActiveCourseId = lastTopic.ActiveCourseId;
            this.UserId = lastTopic.UserId;
            this.TopicId = lastTopic.TopicId;
            this.LectureId = lastTopic.LectureId;
        }
    }
}
