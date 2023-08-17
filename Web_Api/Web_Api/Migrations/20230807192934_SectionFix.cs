using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Web_Api.Migrations
{
    /// <inheritdoc />
    public partial class SectionFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LectureId",
                table: "Sections");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LectureId",
                table: "Sections",
                type: "int",
                nullable: true);
        }
    }
}
