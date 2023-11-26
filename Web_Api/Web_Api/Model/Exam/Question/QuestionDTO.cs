using System.ComponentModel;

namespace Web_Api.Model
{
    public class QuestionDTO
    {
        public int Id { get; set; }
        public string? QuestionText { get; set; }
        public string? Description { get; set; }
        public int ExamId { get; set; }
    }
}
