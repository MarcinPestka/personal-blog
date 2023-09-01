using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Model;
using Web_Api.Service.SectionService;

namespace Web_Api.Service.LectureService
{
    public class LectureService : ILectureService
    {
        private readonly BlogContext context;
        public LectureService(BlogContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Lecture>> AddNewLecture(LectureDTO lecture)
        {
            IEnumerable<Lecture> lectures = await context.Lectures.Where(x => x.CourseId == lecture.CourseId && x.Order >= lecture.Order).ToArrayAsync();
            foreach (var l in lectures)
            {
                l.Order = l.Order + 1;
            }

            Lecture _lecture = new Lecture(lecture);
            context.Lectures.Add(_lecture);

            await context.SaveChangesAsync();
            return await context.Lectures.Where(x => x.CourseId  == lecture.CourseId).ToArrayAsync();
        }

        public async Task<IEnumerable<Lecture>> DeleteLecture(int lectureId)
        {
            Lecture lecture = await context.Lectures.Where(x => x.Id == lectureId).Include(x=>x.Topics).ThenInclude(x=>x.Sections).FirstOrDefaultAsync();
            context.Lectures.Remove(lecture);

            IEnumerable<Lecture> lectures = await context.Lectures.Where(x => x.CourseId == lecture.CourseId && x.Order > lecture.Order).ToArrayAsync();
            foreach (var l in lectures)
            {
                l.Order = l.Order - 1;
            }

            await context.SaveChangesAsync();
            return await context.Lectures.Where(x => x.CourseId == lecture.CourseId).ToArrayAsync();
        }

        public async Task<IEnumerable<Lecture>> EditLecture(LectureDTO lecture)
        {
            Lecture _lecture = await context.Lectures.Where(x => x.Id == lecture.Id).FirstOrDefaultAsync();

            if (_lecture.Order > lecture.Order)
            {
                IEnumerable<Lecture> lectures = await context.Lectures.Where(x => x.CourseId == lecture.CourseId && x.Order >= lecture.Order && x.Order <= _lecture.Order).ToArrayAsync();
                foreach (var t in lectures)
                {
                    t.Order = t.Order + 1;
                }
            }
            else
            {
                IEnumerable<Lecture> lectures = await context.Lectures.Where(x => x.CourseId == lecture.CourseId && x.Order <= lecture.Order && x.Order >= _lecture.Order).ToArrayAsync();
                foreach (var t in lectures)
                {
                    t.Order = t.Order - 1;
                }
            }

            context.Entry(_lecture).CurrentValues.SetValues(lecture);
            await context.SaveChangesAsync();
            return await context.Lectures.Where(x => x.CourseId == lecture.CourseId).Include(x=>x.Topics).ThenInclude(x=>x.Sections).ToArrayAsync();
        }
    }
    }
