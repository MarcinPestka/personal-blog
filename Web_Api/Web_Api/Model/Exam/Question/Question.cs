using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web_Api.Model
{
    public class Question
    {
        public Question()
        {
        }

        public Question(QuestionDTO question)
        {
            Id = question.Id;
            QuestionText = question.QuestionText;
            Description = question.Description;
            ExamId = question.ExamId;
        }

        public int Id { get; set; }
        public string? QuestionText { get; set; }
        public string? Description { get; set; }
        public int ExamId { get; set; }
        public Exam Exam { get; set; }
        public ICollection<Answear>? Answears { get; set; }
        public int CorrectAnswearId { get; set; }
    }
}
