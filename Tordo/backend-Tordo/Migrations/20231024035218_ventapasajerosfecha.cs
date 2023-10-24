﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend_Tordo.Migrations
{
    /// <inheritdoc />
    public partial class ventapasajerosfecha : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "FechaCreacion",
                table: "VentaPasajeCliente",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FechaCreacion",
                table: "VentaPasajeCliente");
        }
    }
}
