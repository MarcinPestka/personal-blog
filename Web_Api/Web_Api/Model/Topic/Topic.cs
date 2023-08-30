namespace Web_Api.Model
{
    public class Topic
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int LectureId { get; set; }
        public Lecture Lecture { get; set; }
        public int? TopicOrder { get; set; }
        public ICollection<Section> Sections { get; set; }

        public Topic()
        {

        }
        public Topic(TopicDTO topic)
        {
            this.Title = topic.Title;
            this.LectureId = topic.LectureId;
            this.TopicOrder = topic.TopicOrder;
        }
    }
}
