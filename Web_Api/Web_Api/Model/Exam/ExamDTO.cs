using System.ComponentModel.DataAnnotations.Schema;

namespace Web_Api.Model
{
    public class ExamDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int AuthorId { get; set; }
    }
}
