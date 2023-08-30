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
            IEnumerable<Lecture> lectures = await context.Lectures.Where(x => x.CourseId == lecture.CourseId && x.LectureOrder >= lecture.LectureOrder).ToArrayAsync();
            foreach (var l in lectures)
            {
                l.LectureOrder = l.LectureOrder + 1;
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

            IEnumerable<Lecture> lectures = await context.Lectures.Where(x => x.CourseId == lecture.CourseId && x.LectureOrder > lecture.LectureOrder).ToArrayAsync();
            foreach (var l in lectures)
            {
                l.LectureOrder = l.LectureOrder - 1;
            }

            await context.SaveChangesAsync();
            return await context.Lectures.Where(x => x.CourseId == lecture.CourseId).ToArrayAsync();
        }

        public async Task<IEnumerable<Lecture>> EditLecture(LectureDTO lecture)
        {
            Lecture _lecture = await context.Lectures.Where(x => x.Id == lecture.Id).FirstOrDefaultAsync();

            if (_lecture.LectureOrder > lecture.LectureOrder)
            {
                IEnumerable<Lecture> lectures = await context.Lectures.Where(x => x.CourseId == lecture.CourseId && x.LectureOrder >= lecture.LectureOrder && x.LectureOrder <= _lecture.LectureOrder).ToArrayAsync();
                foreach (var t in lectures)
                {
                    t.LectureOrder = t.LectureOrder + 1;
                }
            }
            else
            {
                IEnumerable<Lecture> lectures = await context.Lectures.Where(x => x.CourseId == lecture.CourseId && x.LectureOrder <= lecture.LectureOrder && x.LectureOrder >= _lecture.LectureOrder).ToArrayAsync();
                foreach (var t in lectures)
                {
                    t.LectureOrder = t.LectureOrder - 1;
                }
            }

            context.Entry(_lecture).CurrentValues.SetValues(lecture);
            await context.SaveChangesAsync();
            return await context.Lectures.Where(x => x.CourseId == lecture.CourseId).Include(x=>x.Topics).ThenInclude(x=>x.Sections).ToArrayAsync();
        }
    }
    }
