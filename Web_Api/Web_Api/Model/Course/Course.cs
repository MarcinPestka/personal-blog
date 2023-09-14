
using System.ComponentModel.DataAnnotations.Schema;

namespace Web_Api.Model
{
    public class Course
    {
        public Course()
        {

        }
        public Course(CourseDTO course)
        {
            this.Title = course.Title;
            this.Description = course.Description;
            this.Content = course.Content;
        }
        public int Id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime PublishDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int AuthorId { get; set; }
        public string? Content { get; set; }
        public ICollection<Lecture>? Lectures { get; set; }
    }
}
