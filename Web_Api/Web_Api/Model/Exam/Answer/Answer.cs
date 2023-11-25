namespace Web_Api.Model.Exam
{
    public class Answer
    {
        public int Id { get; set; }
        public string AnswerText { get; set; }
        public string Description { get; set; }
        public int QuestionId { get; set; }
        public Question Question { get; set; }

    }
}
