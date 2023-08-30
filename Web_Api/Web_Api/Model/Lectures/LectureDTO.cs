namespace Web_Api.Model
{
    public class LectureDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string? Content { get; set; }
        public int CourseId { get; set; }
        public int? LectureOrder { get; set; }
    }
}
