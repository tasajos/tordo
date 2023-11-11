using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend_Tordo.Migrations
{
    /// <inheritdoc />
    public partial class cuentas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tordo_Contabilidad_Activos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Categoria = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Monto = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    FechaAdquisicion = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FechaValoracion = table.Column<DateTime>(type: "datetime2", nullable: true),
                    VidaUtilEstimada = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tordo_Contabilidad_Activos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tordo_Contabilidad_Egresos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Categoria = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Monto = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    FechaRegistro = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Destinatario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CuentaRelacionadaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tordo_Contabilidad_Egresos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tordo_Contabilidad_Ingresos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Categoria = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Monto = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    FechaRegistro = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Fuente = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CuentaRelacionadaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tordo_Contabilidad_Ingresos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tordo_Contabilidad_Pasivos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Categoria = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Monto = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    FechaIncidencia = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FechaVencimiento = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tordo_Contabilidad_Pasivos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tordo_Contabilidad_Patrimonios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Tipo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Monto = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    FechaRegistro = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tordo_Contabilidad_Patrimonios", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tordo_Contabilidad_Activos");

            migrationBuilder.DropTable(
                name: "Tordo_Contabilidad_Egresos");

            migrationBuilder.DropTable(
                name: "Tordo_Contabilidad_Ingresos");

            migrationBuilder.DropTable(
                name: "Tordo_Contabilidad_Pasivos");

            migrationBuilder.DropTable(
                name: "Tordo_Contabilidad_Patrimonios");
        }
    }
}
