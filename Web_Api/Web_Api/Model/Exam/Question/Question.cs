using System.ComponentModel.DataAnnotations.Schema;

namespace Web_Api.Model.Exam
{
    public class Question
    {
        public int Id { get; set; }
        public string QuestionText { get; set; }
        public string Description { get; set; }
        public int ExamId { get; set; }
        public Exam Exam { get; set; }
        public ICollection<Answer>? Answers { get; set; }
    }
}
