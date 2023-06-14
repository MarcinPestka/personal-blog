﻿using Web_Api.Enumerables;

namespace Web_Api.Model
{
    public class Section
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? SubTitle { get; set; }
        public string? Text { get; set; } = null!;
        public int PostId { get; set; }
        public SectionType SectionType { get; set; }
        public Post Post { get; set; }
    }
}
