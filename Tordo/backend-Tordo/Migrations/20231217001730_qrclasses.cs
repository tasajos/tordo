using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend_Tordo.Migrations
{
    /// <inheritdoc />
    public partial class qrclasses : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ObjetoRespuesta",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    imagenQr = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    idQr = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fechaVencimiento = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    bancoDestino = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cuentaDestino = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    idTransaccion = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ObjetoRespuesta", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PageInfo",
                columns: table => new
                {
                    PageInfoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PageInfo", x => x.PageInfoId);
                });

            migrationBuilder.CreateTable(
                name: "Tordo_QRC_Responses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    codigo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    mensaje = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    objetoId = table.Column<int>(type: "int", nullable: false),
                    PageInfoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tordo_QRC_Responses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tordo_QRC_Responses_ObjetoRespuesta_objetoId",
                        column: x => x.objetoId,
                        principalTable: "ObjetoRespuesta",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tordo_QRC_Responses_PageInfo_PageInfoId",
                        column: x => x.PageInfoId,
                        principalTable: "PageInfo",
                        principalColumn: "PageInfoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tordo_QRC_Responses_objetoId",
                table: "Tordo_QRC_Responses",
                column: "objetoId");

            migrationBuilder.CreateIndex(
                name: "IX_Tordo_QRC_Responses_PageInfoId",
                table: "Tordo_QRC_Responses",
                column: "PageInfoId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tordo_QRC_Responses");

            migrationBuilder.DropTable(
                name: "ObjetoRespuesta");

            migrationBuilder.DropTable(
                name: "PageInfo");
        }
    }
}
