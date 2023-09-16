namespace Web_Api.Model
{
    public class LastTopicDTO
    {
        public int Id { get; set; }
        public int ActiveCourseId { get; set; }
        public int? UserId { get; set; }
        public int TopicId { get; set; }
        public int LectureId { get; set; }
    }
}
