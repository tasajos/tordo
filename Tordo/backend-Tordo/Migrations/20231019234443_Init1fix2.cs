using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend_Tordo.Migrations
{
    /// <inheritdoc />
    public partial class Init1fix2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "destino",
                table: "Rflota",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "estado",
                table: "Rflota",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "origen",
                table: "Rflota",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "destino",
                table: "Rflota");

            migrationBuilder.DropColumn(
                name: "estado",
                table: "Rflota");

            migrationBuilder.DropColumn(
                name: "origen",
                table: "Rflota");
        }
    }
}
