using System.ComponentModel.DataAnnotations.Schema;

namespace Web_Api.Model
{
    public class CourseDTO
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
    }
}
