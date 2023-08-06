using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Web_Api.Migrations
{
    /// <inheritdoc />
    public partial class ActiveCourses : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActiveCourse_Courses_CourseId",
                table: "ActiveCourse");

            migrationBuilder.DropForeignKey(
                name: "FK_ActiveCourse_Users_UserId",
                table: "ActiveCourse");

            migrationBuilder.DropForeignKey(
                name: "FK_CompletedTopic_ActiveCourse_ActiveCourseId",
                table: "CompletedTopic");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ActiveCourse",
                table: "ActiveCourse");

            migrationBuilder.RenameTable(
                name: "ActiveCourse",
                newName: "ActiveCourses");

            migrationBuilder.RenameIndex(
                name: "IX_ActiveCourse_UserId",
                table: "ActiveCourses",
                newName: "IX_ActiveCourses_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_ActiveCourse_CourseId",
                table: "ActiveCourses",
                newName: "IX_ActiveCourses_CourseId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ActiveCourses",
                table: "ActiveCourses",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ActiveCourses_Courses_CourseId",
                table: "ActiveCourses",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ActiveCourses_Users_UserId",
                table: "ActiveCourses",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CompletedTopic_ActiveCourses_ActiveCourseId",
                table: "CompletedTopic",
                column: "ActiveCourseId",
                principalTable: "ActiveCourses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActiveCourses_Courses_CourseId",
                table: "ActiveCourses");

            migrationBuilder.DropForeignKey(
                name: "FK_ActiveCourses_Users_UserId",
                table: "ActiveCourses");

            migrationBuilder.DropForeignKey(
                name: "FK_CompletedTopic_ActiveCourses_ActiveCourseId",
                table: "CompletedTopic");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ActiveCourses",
                table: "ActiveCourses");

            migrationBuilder.RenameTable(
                name: "ActiveCourses",
                newName: "ActiveCourse");

            migrationBuilder.RenameIndex(
                name: "IX_ActiveCourses_UserId",
                table: "ActiveCourse",
                newName: "IX_ActiveCourse_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_ActiveCourses_CourseId",
                table: "ActiveCourse",
                newName: "IX_ActiveCourse_CourseId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ActiveCourse",
                table: "ActiveCourse",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ActiveCourse_Courses_CourseId",
                table: "ActiveCourse",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ActiveCourse_Users_UserId",
                table: "ActiveCourse",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CompletedTopic_ActiveCourse_ActiveCourseId",
                table: "CompletedTopic",
                column: "ActiveCourseId",
                principalTable: "ActiveCourse",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
