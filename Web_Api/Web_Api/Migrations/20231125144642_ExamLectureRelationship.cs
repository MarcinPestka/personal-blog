using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Web_Api.Migrations
{
    /// <inheritdoc />
    public partial class ExamLectureRelationship : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LectureId",
                table: "Exams",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Exams_LectureId",
                table: "Exams",
                column: "LectureId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Exams_Lectures_LectureId",
                table: "Exams",
                column: "LectureId",
                principalTable: "Lectures",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Exams_Lectures_LectureId",
                table: "Exams");

            migrationBuilder.DropIndex(
                name: "IX_Exams_LectureId",
                table: "Exams");

            migrationBuilder.DropColumn(
                name: "LectureId",
                table: "Exams");
        }
    }
}
