namespace Web_Api.Model
{
    public class AnswearDTO
    {
        public int Id { get; set; }
        public string AnswearText { get; set; }
        public string? Description { get; set; }
        public int QuestionId { get; set; }
    }
}
