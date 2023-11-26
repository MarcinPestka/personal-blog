namespace Web_Api.Model
{
    public class Answear
    {
        public Answear()
        {
        }

        public Answear(AnswearDTO answear)
        {
            Id = answear.Id;
            AnswearText = answear.AnswearText;
            Description = answear.Description;
            QuestionId = answear.QuestionId;
        }

        public int Id { get; set; }
        public string AnswearText { get; set; }
        public string? Description { get; set; }
        public int QuestionId { get; set; }
        public Question Question { get; set; }

    }
}
