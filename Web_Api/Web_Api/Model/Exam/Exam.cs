using System.ComponentModel.DataAnnotations.Schema;

namespace Web_Api.Model.Exam
{
    public class Exam
    {
        public int Id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime PublishDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int AuthorId { get; set; }
        public ICollection<Question>? Questions { get; set; }
    }
}
