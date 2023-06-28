using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Web_Api.Migrations
{
    /// <inheritdoc />
    public partial class NameChanges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Lecture_Course_CourseId",
                table: "Lecture");

            migrationBuilder.DropForeignKey(
                name: "FK_Section_Posts_PostId",
                table: "Section");

            migrationBuilder.DropForeignKey(
                name: "FK_Section_Topic_TopicId",
                table: "Section");

            migrationBuilder.DropForeignKey(
                name: "FK_Topic_Lecture_LectureId",
                table: "Topic");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Topic",
                table: "Topic");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Section",
                table: "Section");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Lecture",
                table: "Lecture");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Course",
                table: "Course");

            migrationBuilder.RenameTable(
                name: "Topic",
                newName: "Topics");

            migrationBuilder.RenameTable(
                name: "Section",
                newName: "Sections");

            migrationBuilder.RenameTable(
                name: "Lecture",
                newName: "Lectures");

            migrationBuilder.RenameTable(
                name: "Course",
                newName: "Courses");

            migrationBuilder.RenameIndex(
                name: "IX_Topic_LectureId",
                table: "Topics",
                newName: "IX_Topics_LectureId");

            migrationBuilder.RenameIndex(
                name: "IX_Section_TopicId",
                table: "Sections",
                newName: "IX_Sections_TopicId");

            migrationBuilder.RenameIndex(
                name: "IX_Section_PostId",
                table: "Sections",
                newName: "IX_Sections_PostId");

            migrationBuilder.RenameIndex(
                name: "IX_Lecture_CourseId",
                table: "Lectures",
                newName: "IX_Lectures_CourseId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Topics",
                table: "Topics",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Sections",
                table: "Sections",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Lectures",
                table: "Lectures",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Courses",
                table: "Courses",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Lectures_Courses_CourseId",
                table: "Lectures",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Sections_Posts_PostId",
                table: "Sections",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Sections_Topics_TopicId",
                table: "Sections",
                column: "TopicId",
                principalTable: "Topics",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Topics_Lectures_LectureId",
                table: "Topics",
                column: "LectureId",
                principalTable: "Lectures",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Lectures_Courses_CourseId",
                table: "Lectures");

            migrationBuilder.DropForeignKey(
                name: "FK_Sections_Posts_PostId",
                table: "Sections");

            migrationBuilder.DropForeignKey(
                name: "FK_Sections_Topics_TopicId",
                table: "Sections");

            migrationBuilder.DropForeignKey(
                name: "FK_Topics_Lectures_LectureId",
                table: "Topics");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Topics",
                table: "Topics");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Sections",
                table: "Sections");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Lectures",
                table: "Lectures");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Courses",
                table: "Courses");

            migrationBuilder.RenameTable(
                name: "Topics",
                newName: "Topic");

            migrationBuilder.RenameTable(
                name: "Sections",
                newName: "Section");

            migrationBuilder.RenameTable(
                name: "Lectures",
                newName: "Lecture");

            migrationBuilder.RenameTable(
                name: "Courses",
                newName: "Course");

            migrationBuilder.RenameIndex(
                name: "IX_Topics_LectureId",
                table: "Topic",
                newName: "IX_Topic_LectureId");

            migrationBuilder.RenameIndex(
                name: "IX_Sections_TopicId",
                table: "Section",
                newName: "IX_Section_TopicId");

            migrationBuilder.RenameIndex(
                name: "IX_Sections_PostId",
                table: "Section",
                newName: "IX_Section_PostId");

            migrationBuilder.RenameIndex(
                name: "IX_Lectures_CourseId",
                table: "Lecture",
                newName: "IX_Lecture_CourseId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Topic",
                table: "Topic",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Section",
                table: "Section",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Lecture",
                table: "Lecture",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Course",
                table: "Course",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Lecture_Course_CourseId",
                table: "Lecture",
                column: "CourseId",
                principalTable: "Course",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Section_Posts_PostId",
                table: "Section",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Section_Topic_TopicId",
                table: "Section",
                column: "TopicId",
                principalTable: "Topic",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Topic_Lecture_LectureId",
                table: "Topic",
                column: "LectureId",
                principalTable: "Lecture",
                principalColumn: "Id");
        }
    }
}
