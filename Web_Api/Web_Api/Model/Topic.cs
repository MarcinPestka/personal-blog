namespace Web_Api.Model
{
    public class Topic
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public ICollection<Section> Sections { get; set; }
    }
}
