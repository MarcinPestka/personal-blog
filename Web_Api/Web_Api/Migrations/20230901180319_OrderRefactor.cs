using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Web_Api.Migrations
{
    /// <inheritdoc />
    public partial class OrderRefactor : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TopicOrder",
                table: "Topics",
                newName: "Order");

            migrationBuilder.RenameColumn(
                name: "SectionOrder",
                table: "Sections",
                newName: "Order");

            migrationBuilder.RenameColumn(
                name: "LectureOrder",
                table: "Lectures",
                newName: "Order");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Order",
                table: "Topics",
                newName: "TopicOrder");

            migrationBuilder.RenameColumn(
                name: "Order",
                table: "Sections",
                newName: "SectionOrder");

            migrationBuilder.RenameColumn(
                name: "Order",
                table: "Lectures",
                newName: "LectureOrder");
        }
    }
}
