USE [master]
GO
/****** Object:  Database [CHATORDODB]    Script Date: 9/1/2024 13:09:11 ******/
CREATE DATABASE [CHATORDODB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CHATORDODB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\CHATORDODB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CHATORDODB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\CHATORDODB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [CHATORDODB] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CHATORDODB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CHATORDODB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CHATORDODB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CHATORDODB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CHATORDODB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CHATORDODB] SET ARITHABORT OFF 
GO
ALTER DATABASE [CHATORDODB] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [CHATORDODB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CHATORDODB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CHATORDODB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CHATORDODB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CHATORDODB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CHATORDODB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CHATORDODB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CHATORDODB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CHATORDODB] SET  ENABLE_BROKER 
GO
ALTER DATABASE [CHATORDODB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CHATORDODB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CHATORDODB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CHATORDODB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CHATORDODB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CHATORDODB] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [CHATORDODB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CHATORDODB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [CHATORDODB] SET  MULTI_USER 
GO
ALTER DATABASE [CHATORDODB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CHATORDODB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CHATORDODB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CHATORDODB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CHATORDODB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CHATORDODB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [CHATORDODB] SET QUERY_STORE = ON
GO
ALTER DATABASE [CHATORDODB] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [CHATORDODB]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PageInfo]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PageInfo](
	[PageInfoId] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_PageInfo] PRIMARY KEY CLUSTERED 
(
	[PageInfoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PasajeCliente]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PasajeCliente](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](max) NOT NULL,
	[origen] [nvarchar](max) NOT NULL,
	[ci] [int] NOT NULL,
	[metodopago] [nvarchar](max) NOT NULL,
	[FechaNacimiento] [datetime2](7) NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
	[apellidos] [nvarchar](max) NOT NULL,
	[asiento] [nvarchar](max) NOT NULL,
	[destino] [nvarchar](max) NOT NULL,
	[ext] [nvarchar](max) NOT NULL,
	[nit] [int] NOT NULL,
 CONSTRAINT [PK_PasajeCliente] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rflota]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rflota](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[placa] [nvarchar](max) NOT NULL,
	[conductor] [nvarchar](max) NOT NULL,
	[hora] [nvarchar](max) NOT NULL,
	[tipo] [nvarchar](max) NOT NULL,
	[cantidadpasajeros] [nvarchar](max) NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
	[destino] [nvarchar](max) NOT NULL,
	[estado] [nvarchar](max) NOT NULL,
	[origen] [nvarchar](max) NOT NULL,
	[precio] [int] NOT NULL,
	[precioCalculado] [decimal](18, 2) NOT NULL,
	[fecharegistro] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Rflota] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_Contabilidad_Activos]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_Contabilidad_Activos](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Categoria] [nvarchar](max) NOT NULL,
	[Descripcion] [nvarchar](max) NOT NULL,
	[Monto] [decimal](18, 2) NOT NULL,
	[FechaAdquisicion] [datetime2](7) NOT NULL,
	[FechaValoracion] [datetime2](7) NULL,
	[VidaUtilEstimada] [int] NULL,
 CONSTRAINT [PK_Tordo_Contabilidad_Activos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_Contabilidad_Egresos]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_Contabilidad_Egresos](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Categoria] [nvarchar](max) NOT NULL,
	[Descripcion] [nvarchar](max) NOT NULL,
	[Monto] [decimal](18, 2) NOT NULL,
	[FechaRegistro] [datetime2](7) NOT NULL,
	[Destinatario] [nvarchar](max) NOT NULL,
	[CuentaRelacionadaId] [int] NOT NULL,
 CONSTRAINT [PK_Tordo_Contabilidad_Egresos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_Contabilidad_Ingresos]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_Contabilidad_Ingresos](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Categoria] [nvarchar](max) NOT NULL,
	[Descripcion] [nvarchar](max) NOT NULL,
	[Monto] [decimal](18, 2) NOT NULL,
	[FechaRegistro] [datetime2](7) NOT NULL,
	[Fuente] [nvarchar](max) NOT NULL,
	[CuentaRelacionadaId] [int] NOT NULL,
 CONSTRAINT [PK_Tordo_Contabilidad_Ingresos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_Contabilidad_Pasivos]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_Contabilidad_Pasivos](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Categoria] [nvarchar](max) NOT NULL,
	[Descripcion] [nvarchar](max) NOT NULL,
	[Monto] [decimal](18, 2) NOT NULL,
	[FechaIncidencia] [datetime2](7) NOT NULL,
	[FechaVencimiento] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Tordo_Contabilidad_Pasivos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_Contabilidad_Patrimonios]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_Contabilidad_Patrimonios](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Tipo] [nvarchar](max) NOT NULL,
	[Descripcion] [nvarchar](max) NOT NULL,
	[Monto] [decimal](18, 2) NOT NULL,
	[FechaRegistro] [datetime2](7) NOT NULL,
	[Categoria] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Tordo_Contabilidad_Patrimonios] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_Contabilidad_Registroscuentas]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_Contabilidad_Registroscuentas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nvl] [int] NOT NULL,
	[Nro] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Tordo_Contabilidad_Registroscuentas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_Contabilidad_Registroscuentas_ActivoNvl1]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_Contabilidad_Registroscuentas_ActivoNvl1](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nvl] [int] NOT NULL,
	[Nro] [nvarchar](max) NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Tordo_Contabilidad_Registroscuentas_ActivoNvl1] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_Contabilidad_Registroscuentas_ActivoNvl2]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_Contabilidad_Registroscuentas_ActivoNvl2](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nvl] [int] NOT NULL,
	[Nro] [nvarchar](max) NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Tordo_Contabilidad_Registroscuentas_ActivoNvl2] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_Contabilidad_Registroscuentas_ActivoNvl3]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_Contabilidad_Registroscuentas_ActivoNvl3](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nvl] [int] NOT NULL,
	[Nro] [nvarchar](max) NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Tordo_Contabilidad_Registroscuentas_ActivoNvl3] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_Contabilidad_Registroscuentas_ActivoNvl4]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_Contabilidad_Registroscuentas_ActivoNvl4](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nvl] [int] NOT NULL,
	[Nro] [nvarchar](max) NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Tordo_Contabilidad_Registroscuentas_ActivoNvl4] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_Contabilidad_Registroscuentas_ActivoNvl5]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_Contabilidad_Registroscuentas_ActivoNvl5](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nvl] [int] NOT NULL,
	[Nro] [nvarchar](max) NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Tordo_Contabilidad_Registroscuentas_ActivoNvl5] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_Contabilidad_Registrosnivels]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_Contabilidad_Registrosnivels](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ParentId] [int] NULL,
	[Nombre] [nvarchar](max) NOT NULL,
	[Tipo] [nvarchar](max) NOT NULL,
	[Nivel] [int] NOT NULL,
 CONSTRAINT [PK_Tordo_Contabilidad_Registrosnivels] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_costosfijo]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_costosfijo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[concepto] [nvarchar](max) NOT NULL,
	[fechacostofijo] [nvarchar](max) NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
	[monto] [int] NOT NULL,
 CONSTRAINT [PK_Tordo_costosfijo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_costosvariables]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_costosvariables](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[concepto] [nvarchar](max) NOT NULL,
	[monto] [int] NOT NULL,
	[fechacostovariable] [nvarchar](max) NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Tordo_costosvariables] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_QRC_QRresponse]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_QRC_QRresponse](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[imagenQr] [nvarchar](max) NOT NULL,
	[idQr] [nvarchar](max) NOT NULL,
	[fechaVencimiento] [nvarchar](max) NOT NULL,
	[bancoDestino] [nvarchar](max) NOT NULL,
	[cuentaDestino] [nvarchar](max) NOT NULL,
	[idTransaccion] [int] NOT NULL,
 CONSTRAINT [PK_Tordo_QRC_QRresponse] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tordo_QRC_Responses]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tordo_QRC_Responses](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[codigo] [nvarchar](max) NOT NULL,
	[mensaje] [nvarchar](max) NOT NULL,
	[objetoId] [int] NOT NULL,
	[PageInfoId] [int] NOT NULL,
 CONSTRAINT [PK_Tordo_QRC_Responses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VentaPasajeCliente]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VentaPasajeCliente](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[asiento] [int] NOT NULL,
	[fecha] [nvarchar](max) NOT NULL,
	[nombre] [nvarchar](max) NOT NULL,
	[apellidos] [nvarchar](max) NOT NULL,
	[nit] [nvarchar](max) NOT NULL,
	[ci] [int] NOT NULL,
	[precio] [int] NOT NULL,
	[preciocalculado] [decimal](18, 2) NOT NULL,
	[tipo] [nvarchar](max) NOT NULL,
	[telefono] [nvarchar](max) NOT NULL,
	[email] [nvarchar](max) NOT NULL,
	[origen] [nvarchar](max) NOT NULL,
	[destino] [nvarchar](max) NOT NULL,
	[hora] [nvarchar](max) NOT NULL,
	[placa] [nvarchar](max) NOT NULL,
	[FechaNacimiento] [datetime2](7) NOT NULL,
	[metodopago] [nvarchar](max) NOT NULL,
	[estado] [nvarchar](max) NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_VentaPasajeCliente] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VentaPasajeOnline]    Script Date: 9/1/2024 13:09:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VentaPasajeOnline](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[asiento] [int] NOT NULL,
	[fecha] [nvarchar](max) NOT NULL,
	[nombre] [nvarchar](max) NOT NULL,
	[apellidos] [nvarchar](max) NOT NULL,
	[nit] [nvarchar](max) NOT NULL,
	[ci] [int] NOT NULL,
	[precio] [int] NOT NULL,
	[preciocalculado] [decimal](18, 2) NOT NULL,
	[tipo] [nvarchar](max) NOT NULL,
	[telefono] [nvarchar](max) NOT NULL,
	[email] [nvarchar](max) NOT NULL,
	[origen] [nvarchar](max) NOT NULL,
	[destino] [nvarchar](max) NOT NULL,
	[hora] [nvarchar](max) NOT NULL,
	[placa] [nvarchar](max) NOT NULL,
	[FechaNacimiento] [datetime2](7) NOT NULL,
	[metodopago] [nvarchar](max) NOT NULL,
	[estado] [nvarchar](max) NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
	[transaccion] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_VentaPasajeOnline] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Index [IX_Tordo_QRC_Responses_objetoId]    Script Date: 9/1/2024 13:09:11 ******/
CREATE NONCLUSTERED INDEX [IX_Tordo_QRC_Responses_objetoId] ON [dbo].[Tordo_QRC_Responses]
(
	[objetoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Tordo_QRC_Responses_PageInfoId]    Script Date: 9/1/2024 13:09:11 ******/
CREATE NONCLUSTERED INDEX [IX_Tordo_QRC_Responses_PageInfoId] ON [dbo].[Tordo_QRC_Responses]
(
	[PageInfoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PasajeCliente] ADD  DEFAULT (N'') FOR [apellidos]
GO
ALTER TABLE [dbo].[PasajeCliente] ADD  DEFAULT (N'') FOR [asiento]
GO
ALTER TABLE [dbo].[PasajeCliente] ADD  DEFAULT (N'') FOR [destino]
GO
ALTER TABLE [dbo].[PasajeCliente] ADD  DEFAULT (N'') FOR [ext]
GO
ALTER TABLE [dbo].[PasajeCliente] ADD  DEFAULT ((0)) FOR [nit]
GO
ALTER TABLE [dbo].[Rflota] ADD  DEFAULT (N'') FOR [destino]
GO
ALTER TABLE [dbo].[Rflota] ADD  DEFAULT (N'') FOR [estado]
GO
ALTER TABLE [dbo].[Rflota] ADD  DEFAULT (N'') FOR [origen]
GO
ALTER TABLE [dbo].[Rflota] ADD  DEFAULT ((0)) FOR [precio]
GO
ALTER TABLE [dbo].[Rflota] ADD  DEFAULT ((0.0)) FOR [precioCalculado]
GO
ALTER TABLE [dbo].[Rflota] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [fecharegistro]
GO
ALTER TABLE [dbo].[Tordo_Contabilidad_Patrimonios] ADD  DEFAULT (N'') FOR [Categoria]
GO
ALTER TABLE [dbo].[Tordo_costosfijo] ADD  DEFAULT ((0)) FOR [monto]
GO
ALTER TABLE [dbo].[VentaPasajeCliente] ADD  DEFAULT (N'') FOR [estado]
GO
ALTER TABLE [dbo].[VentaPasajeCliente] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [FechaCreacion]
GO
ALTER TABLE [dbo].[Tordo_QRC_Responses]  WITH CHECK ADD  CONSTRAINT [FK_Tordo_QRC_Responses_PageInfo_PageInfoId] FOREIGN KEY([PageInfoId])
REFERENCES [dbo].[PageInfo] ([PageInfoId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Tordo_QRC_Responses] CHECK CONSTRAINT [FK_Tordo_QRC_Responses_PageInfo_PageInfoId]
GO
ALTER TABLE [dbo].[Tordo_QRC_Responses]  WITH CHECK ADD  CONSTRAINT [FK_Tordo_QRC_Responses_Tordo_QRC_QRresponse_objetoId] FOREIGN KEY([objetoId])
REFERENCES [dbo].[Tordo_QRC_QRresponse] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Tordo_QRC_Responses] CHECK CONSTRAINT [FK_Tordo_QRC_Responses_Tordo_QRC_QRresponse_objetoId]
GO
USE [master]
GO
ALTER DATABASE [CHATORDODB] SET  READ_WRITE 
GO
