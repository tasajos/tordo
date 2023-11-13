using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend_Tordo.Migrations
{
    /// <inheritdoc />
    public partial class patrimonios : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Categoria",
                table: "Tordo_Contabilidad_Patrimonios",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Categoria",
                table: "Tordo_Contabilidad_Patrimonios");
        }
    }
}
