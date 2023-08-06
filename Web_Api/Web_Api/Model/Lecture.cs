﻿namespace Web_Api.Model
{
    public class Lecture
    {
        public int Id { get; set; }
        public DateTime PublishDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public int CourseId { get; set; }
        public Course Course { get; set; }
        public ICollection<Topic> Topics { get; set; }
    }
}
