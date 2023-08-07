namespace Web_Api.Model
{
    public class TopicDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public ICollection<Section> Sections { get; set; }
    }
}
