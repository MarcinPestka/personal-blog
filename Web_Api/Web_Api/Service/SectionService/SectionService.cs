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

        public async Task<IEnumerable<Section>> AddNewSection(Section section)
        {
            IEnumerable<Section> sections = await context.Sections.Where(x => x.TopicId == section.TopicId && x.Order >= section.Order).ToArrayAsync();
            foreach (var s in sections)
            {
                s.Order = s.Order + 1;
            }

            context.Sections.Add(section);
            await context.SaveChangesAsync();

            return await context.Sections.Where(x => x.TopicId == section.TopicId).ToArrayAsync();
        }

        public async Task<IEnumerable<Section>> DeleteSection(int sectionId)
        {
            Section section = await context.Sections.Where(x => x.Id == sectionId).FirstOrDefaultAsync();
            context.Sections.Remove(section);

            IEnumerable<Section> sections = await context.Sections.Where(x => x.TopicId == section.TopicId && x.Order > section.Order).ToArrayAsync();
            foreach (var s in sections)
            {
                s.Order = s.Order - 1;
            }

            await context.SaveChangesAsync();
            return await context.Sections.Where(x => x.TopicId == section.TopicId).ToArrayAsync();
        }

        public async Task<IEnumerable<Section>> EditSection(Section section)
        {
            Section _section = await context.Sections.Where(x => x.Id == section.Id).FirstOrDefaultAsync();
            if (_section.Order > section.Order)
            {
                IEnumerable<Section> sections = await context.Sections.Where(x => x.TopicId == section.TopicId && x.Order >= section.Order && x.Order <= _section.Order).ToArrayAsync();
                foreach (var s in sections)
                {
                    s.Order = s.Order + 1;
                }
            }
            else
            {
                IEnumerable<Section> sections = await context.Sections.Where(x => x.TopicId == section.TopicId && x.Order <= section.Order && x.Order >= _section.Order).ToArrayAsync();
                foreach (var s in sections)
                {
                    s.Order = s.Order - 1;
                }
            }

            context.Entry(_section).CurrentValues.SetValues(section);
            await context.SaveChangesAsync();
            return await context.Sections.Where(x => x.TopicId == section.TopicId).ToArrayAsync();
        }

    }
}
