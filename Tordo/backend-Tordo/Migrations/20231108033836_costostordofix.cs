using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend_Tordo.Migrations
{
    /// <inheritdoc />
    public partial class costostordofix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "conductor",
                table: "Tordo_costosfijo");

            migrationBuilder.RenameColumn(
                name: "placa",
                table: "Tordo_costosfijo",
                newName: "concepto");

            migrationBuilder.AlterColumn<int>(
                name: "monto",
                table: "Tordo_costosvariables",
                type: "int",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AddColumn<int>(
                name: "monto",
                table: "Tordo_costosfijo",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "monto",
                table: "Tordo_costosfijo");

            migrationBuilder.RenameColumn(
                name: "concepto",
                table: "Tordo_costosfijo",
                newName: "placa");

            migrationBuilder.AlterColumn<double>(
                name: "monto",
                table: "Tordo_costosvariables",
                type: "float",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "conductor",
                table: "Tordo_costosfijo",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
