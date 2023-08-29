using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Model;

namespace Web_Api.Service.SectionService
{
    public class SectionService : ISectionService
    {
        private readonly BlogContext context;
        public SectionService(BlogContext context)
        {
            this.context = context;
        }

        public async Task<Section> AddNewSection(Section section)
        {
            IEnumerable<Section> sections = await context.Sections.Where(x => x.TopicId == section.TopicId && x.SectionOrder >= section.SectionOrder).ToArrayAsync();
            foreach (var s in sections)
            {
                s.SectionOrder = s.SectionOrder + 1;
            }

            context.Sections.Add(section);
            await context.SaveChangesAsync();
            return section;
        }

        public async Task<IActionResult> DeleteSection(int sectionId)
        {
            Section section = await context.Sections.Where(x => x.Id == sectionId).FirstOrDefaultAsync();
            context.Sections.Remove(section);

            IEnumerable<Section> sections = await context.Sections.Where(x => x.TopicId == section.TopicId && x.SectionOrder > section.SectionOrder).ToArrayAsync();
            foreach (var s in sections)
            {
                s.SectionOrder = s.SectionOrder - 1;
            }

            await context.SaveChangesAsync();
            return new OkResult();
        }

        public async Task<IEnumerable<Section>> EditSection(Section section)
        {
            Section _section = await context.Sections.Where(x => x.Id == section.Id).FirstOrDefaultAsync();
            if (_section.SectionOrder > section.SectionOrder)
            {
                IEnumerable<Section> sections = await context.Sections.Where(x => x.TopicId == section.TopicId && x.SectionOrder >= section.SectionOrder && x.SectionOrder <= _section.SectionOrder).ToArrayAsync();
                foreach (var s in sections)
                {
                    s.SectionOrder = s.SectionOrder + 1;
                }
            }
            else
            {
                IEnumerable<Section> sections = await context.Sections.Where(x => x.TopicId == section.TopicId && x.SectionOrder <= section.SectionOrder && x.SectionOrder >= _section.SectionOrder).ToArrayAsync();
                foreach (var s in sections)
                {
                    s.SectionOrder = s.SectionOrder - 1;
                }
            }

            context.Entry(_section).CurrentValues.SetValues(section);
            await context.SaveChangesAsync();
            return await context.Sections.Where(x => x.TopicId == section.TopicId).ToArrayAsync();
        }

    }
}
