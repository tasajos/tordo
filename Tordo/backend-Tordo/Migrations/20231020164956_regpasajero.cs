using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend_Tordo.Migrations
{
    /// <inheritdoc />
    public partial class regpasajero : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Nombre",
                table: "PasajeCliente",
                newName: "nombre");

            migrationBuilder.RenameColumn(
                name: "Ci",
                table: "PasajeCliente",
                newName: "ci");

            migrationBuilder.RenameColumn(
                name: "Telefono",
                table: "PasajeCliente",
                newName: "origen");

            migrationBuilder.RenameColumn(
                name: "Extension",
                table: "PasajeCliente",
                newName: "metodopago");

            migrationBuilder.AddColumn<string>(
                name: "apellidos",
                table: "PasajeCliente",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "asiento",
                table: "PasajeCliente",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "destino",
                table: "PasajeCliente",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ext",
                table: "PasajeCliente",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "nit",
                table: "PasajeCliente",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "apellidos",
                table: "PasajeCliente");

            migrationBuilder.DropColumn(
                name: "asiento",
                table: "PasajeCliente");

            migrationBuilder.DropColumn(
                name: "destino",
                table: "PasajeCliente");

            migrationBuilder.DropColumn(
                name: "ext",
                table: "PasajeCliente");

            migrationBuilder.DropColumn(
                name: "nit",
                table: "PasajeCliente");

            migrationBuilder.RenameColumn(
                name: "nombre",
                table: "PasajeCliente",
                newName: "Nombre");

            migrationBuilder.RenameColumn(
                name: "ci",
                table: "PasajeCliente",
                newName: "Ci");

            migrationBuilder.RenameColumn(
                name: "origen",
                table: "PasajeCliente",
                newName: "Telefono");

            migrationBuilder.RenameColumn(
                name: "metodopago",
                table: "PasajeCliente",
                newName: "Extension");
        }
    }
}
