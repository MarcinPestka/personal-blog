using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Web_Api.Migrations
{
    /// <inheritdoc />
    public partial class SectionChange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sections_Posts_PostId",
                table: "Sections");

            migrationBuilder.AlterColumn<int>(
                name: "PostId",
                table: "Sections",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "LectureId",
                table: "Sections",
                type: "int",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Sections_Posts_PostId",
                table: "Sections",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sections_Posts_PostId",
                table: "Sections");

            migrationBuilder.DropColumn(
                name: "LectureId",
                table: "Sections");

            migrationBuilder.AlterColumn<int>(
                name: "PostId",
                table: "Sections",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Sections_Posts_PostId",
                table: "Sections",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
