using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Web_Api.Model;
using Web_Api.Service.Blog;
using Web_Api.Service.CourseService;
using Web_Api.Service.SectionService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SectionController : ControllerBase
    {
        private readonly ISectionService sectionService;
        public SectionController(ISectionService sectionService)
        {
            this.sectionService = sectionService;
        }

        [HttpDelete("DeleteSection")]
        [Authorize]
        public Task<IEnumerable<Section>> DeleteSection(int sectionId)
        {
            return this.sectionService.DeleteSection(sectionId);
        }

        [HttpPut("EditSection")]
        [Authorize]
        public Task<IEnumerable<Section>> EditSection(Section section)
        {
            return this.sectionService.EditSection(section);
        }

        [HttpPost("AddNewSection")]
        [Authorize]
        public Task<IEnumerable<Section>> AddNewSection(Section section)
        {
            return this.sectionService.AddNewSection(section);
        }
    }
}
