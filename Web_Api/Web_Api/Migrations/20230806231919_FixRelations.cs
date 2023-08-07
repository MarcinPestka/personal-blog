using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Web_Api.Migrations
{
    /// <inheritdoc />
    public partial class FixRelations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CompletedTopic_Users_UserId",
                table: "CompletedTopic");

            migrationBuilder.DropIndex(
                name: "IX_CompletedTopic_UserId",
                table: "CompletedTopic");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "CompletedTopic");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "CompletedTopic",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CompletedTopic_UserId",
                table: "CompletedTopic",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_CompletedTopic_Users_UserId",
                table: "CompletedTopic",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
