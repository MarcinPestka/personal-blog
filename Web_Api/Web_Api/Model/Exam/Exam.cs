using System.ComponentModel.DataAnnotations.Schema;

namespace Web_Api.Model
{
    public class Exam
    {
        public Exam()
        {
        }

        public Exam(ExamDTO examDTO)
        {
            Id = examDTO.Id;
            Title = examDTO.Title;
            Description = examDTO.Description;
            AuthorId = examDTO.AuthorId;
        }

        public int Id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime PublishDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int AuthorId { get; set; }
        public ICollection<Question>? Questions { get; set; }
    }
}
