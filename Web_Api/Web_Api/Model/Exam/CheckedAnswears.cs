namespace Web_Api.Model
{
    public class CheckedAnswears
    {
        public int ExamId { get; set; }
        public List<AnswearPair> AnswearPairs { get; set; }
    }

    public class AnswearPair
    {
        public int QuestionId { get; set; }
        public int UserAnswear { get; set; }
    }
}
