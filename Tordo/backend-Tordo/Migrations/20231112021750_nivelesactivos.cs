using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend_Tordo.Migrations
{
    /// <inheritdoc />
    public partial class nivelesactivos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tordo_Contabilidad_Registroscuentas_ActivoNvl1",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nvl = table.Column<int>(type: "int", nullable: false),
                    Nro = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tordo_Contabilidad_Registroscuentas_ActivoNvl1", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tordo_Contabilidad_Registroscuentas_ActivoNvl2",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nvl = table.Column<int>(type: "int", nullable: false),
                    Nro = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tordo_Contabilidad_Registroscuentas_ActivoNvl2", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tordo_Contabilidad_Registroscuentas_ActivoNvl3",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nvl = table.Column<int>(type: "int", nullable: false),
                    Nro = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tordo_Contabilidad_Registroscuentas_ActivoNvl3", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tordo_Contabilidad_Registroscuentas_ActivoNvl4",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nvl = table.Column<int>(type: "int", nullable: false),
                    Nro = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tordo_Contabilidad_Registroscuentas_ActivoNvl4", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tordo_Contabilidad_Registroscuentas_ActivoNvl5",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nvl = table.Column<int>(type: "int", nullable: false),
                    Nro = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tordo_Contabilidad_Registroscuentas_ActivoNvl5", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tordo_Contabilidad_Registroscuentas_ActivoNvl1");

            migrationBuilder.DropTable(
                name: "Tordo_Contabilidad_Registroscuentas_ActivoNvl2");

            migrationBuilder.DropTable(
                name: "Tordo_Contabilidad_Registroscuentas_ActivoNvl3");

            migrationBuilder.DropTable(
                name: "Tordo_Contabilidad_Registroscuentas_ActivoNvl4");

            migrationBuilder.DropTable(
                name: "Tordo_Contabilidad_Registroscuentas_ActivoNvl5");
        }
    }
}
