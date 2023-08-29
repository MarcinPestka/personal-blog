using Microsoft.AspNetCore.Mvc;
using Web_Api.Model;

namespace Web_Api.Service.SectionService
{
    public interface ISectionService
    {
        Task<Section> AddNewSection(Section section);
        Task<IActionResult> DeleteSection(int sectionId);
        Task<IEnumerable<Section>> EditSection(Section section);
    }
}
