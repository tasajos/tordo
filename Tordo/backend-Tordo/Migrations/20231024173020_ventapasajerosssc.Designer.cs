﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend_Tordo.Models;

#nullable disable

namespace backend_Tordo.Migrations
{
    [DbContext(typeof(TordoContext))]
    [Migration("20231024173020_ventapasajerosssc")]
    partial class ventapasajerosssc
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.12")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("backend_Tordo.Models.Flota.RegistroFlota", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("cantidadpasajeros")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("conductor")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("destino")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("estado")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("fecharegistro")
                        .HasColumnType("datetime2");

                    b.Property<string>("hora")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("origen")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("placa")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("precio")
                        .HasColumnType("int");

                    b.Property<decimal>("precioCalculado")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("tipo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Rflota");
                });

            modelBuilder.Entity("backend_Tordo.Models.Pasajeros.VentaPasajero", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FechaNacimiento")
                        .HasColumnType("datetime2");

                    b.Property<string>("apellidos")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("asiento")
                        .HasColumnType("int");

                    b.Property<int>("ci")
                        .HasColumnType("int");

                    b.Property<string>("destino")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("estado")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fecha")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("hora")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("metodopago")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nit")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("origen")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("placa")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("precio")
                        .HasColumnType("int");

                    b.Property<decimal>("preciocalculado")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("telefono")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("VentaPasajeCliente");
                });

            modelBuilder.Entity("backend_Tordo.Models.Pasajeros.pasajeros", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FechaNacimiento")
                        .HasColumnType("datetime2");

                    b.Property<string>("apellidos")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("asiento")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ci")
                        .HasColumnType("int");

                    b.Property<string>("destino")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ext")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("metodopago")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("nit")
                        .HasColumnType("int");

                    b.Property<string>("nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("origen")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("PasajeCliente");
                });
#pragma warning restore 612, 618
        }
    }
}
