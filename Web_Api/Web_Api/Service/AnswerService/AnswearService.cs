using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Model;

namespace Web_Api.Service.ExamService
{
    public class AnswearService : IAnswearService
    {
        private readonly BlogContext context;
        public AnswearService(BlogContext context)
        {
            this.context = context;
        }

        public async Task<Answear> AddAnswear(AnswearDTO answear)
        {
            Answear _answear = new Answear(answear);
            context.Answears.Add(_answear);

            await context.SaveChangesAsync();

            return await context.Answears.Where(x => x.Id == _answear.Id).FirstOrDefaultAsync();
        }

    }
}
