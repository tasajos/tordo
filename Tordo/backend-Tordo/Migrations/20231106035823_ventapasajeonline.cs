using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend_Tordo.Migrations
{
    /// <inheritdoc />
    public partial class ventapasajeonline : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "VentaPasajeOnline",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    asiento = table.Column<int>(type: "int", nullable: false),
                    fecha = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    apellidos = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nit = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ci = table.Column<int>(type: "int", nullable: false),
                    precio = table.Column<int>(type: "int", nullable: false),
                    preciocalculado = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    tipo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    telefono = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    origen = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    destino = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    hora = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    placa = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaNacimiento = table.Column<DateTime>(type: "datetime2", nullable: false),
                    metodopago = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    estado = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false),
                    transaccion = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VentaPasajeOnline", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VentaPasajeOnline");
        }
    }
}
