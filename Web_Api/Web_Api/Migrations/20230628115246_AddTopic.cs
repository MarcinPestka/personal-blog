using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Web_Api.Migrations
{
    /// <inheritdoc />
    public partial class AddTopic : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Section_Lecture_LectureId",
                table: "Section");

            migrationBuilder.RenameColumn(
                name: "LectureId",
                table: "Section",
                newName: "TopicId");

            migrationBuilder.RenameIndex(
                name: "IX_Section_LectureId",
                table: "Section",
                newName: "IX_Section_TopicId");

            migrationBuilder.CreateTable(
                name: "Topic",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    LectureId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Topic", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Topic_Lecture_LectureId",
                        column: x => x.LectureId,
                        principalTable: "Lecture",
                        principalColumn: "Id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Topic_LectureId",
                table: "Topic",
                column: "LectureId");

            migrationBuilder.AddForeignKey(
                name: "FK_Section_Topic_TopicId",
                table: "Section",
                column: "TopicId",
                principalTable: "Topic",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Section_Topic_TopicId",
                table: "Section");

            migrationBuilder.DropTable(
                name: "Topic");

            migrationBuilder.RenameColumn(
                name: "TopicId",
                table: "Section",
                newName: "LectureId");

            migrationBuilder.RenameIndex(
                name: "IX_Section_TopicId",
                table: "Section",
                newName: "IX_Section_LectureId");

            migrationBuilder.AddForeignKey(
                name: "FK_Section_Lecture_LectureId",
                table: "Section",
                column: "LectureId",
                principalTable: "Lecture",
                principalColumn: "Id");
        }
    }
}
