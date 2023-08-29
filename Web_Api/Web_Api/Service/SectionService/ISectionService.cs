using Microsoft.AspNetCore.Mvc;
using Web_Api.Model;

namespace Web_Api.Service.SectionService
{
    public interface ISectionService
    {
        Task<IEnumerable<Section>> AddNewSection(Section section);
        Task<IEnumerable<Section>> DeleteSection(int sectionId);
        Task<IEnumerable<Section>> EditSection(Section section);
    }
}
