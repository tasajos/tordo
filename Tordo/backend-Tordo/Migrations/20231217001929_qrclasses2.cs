using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend_Tordo.Migrations
{
    /// <inheritdoc />
    public partial class qrclasses2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tordo_QRC_Responses_ObjetoRespuesta_objetoId",
                table: "Tordo_QRC_Responses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ObjetoRespuesta",
                table: "ObjetoRespuesta");

            migrationBuilder.RenameTable(
                name: "ObjetoRespuesta",
                newName: "Tordo_QRC_QRresponse");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Tordo_QRC_QRresponse",
                table: "Tordo_QRC_QRresponse",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tordo_QRC_Responses_Tordo_QRC_QRresponse_objetoId",
                table: "Tordo_QRC_Responses",
                column: "objetoId",
                principalTable: "Tordo_QRC_QRresponse",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tordo_QRC_Responses_Tordo_QRC_QRresponse_objetoId",
                table: "Tordo_QRC_Responses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Tordo_QRC_QRresponse",
                table: "Tordo_QRC_QRresponse");

            migrationBuilder.RenameTable(
                name: "Tordo_QRC_QRresponse",
                newName: "ObjetoRespuesta");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ObjetoRespuesta",
                table: "ObjetoRespuesta",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tordo_QRC_Responses_ObjetoRespuesta_objetoId",
                table: "Tordo_QRC_Responses",
                column: "objetoId",
                principalTable: "ObjetoRespuesta",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
