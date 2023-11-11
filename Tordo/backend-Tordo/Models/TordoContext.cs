using backend_Tordo.Models.Contabilidad;
using backend_Tordo.Models.Costos;
using backend_Tordo.Models.Flota;
using backend_Tordo.Models.Pasajeros;
using Microsoft.EntityFrameworkCore;
namespace backend_Tordo.Models
{
  public class TordoContext : DbContext
  {
    public TordoContext(DbContextOptions<TordoContext> options) : base(options)
    {

    }


    //pasajeros

    public DbSet<pasajeros> PasajeCliente { get; set; } //<clase> Nombre de la tabla

    public DbSet<VentaPasajero> VentaPasajeCliente { get; set; } //<clase> Nombre de la tabla

    public DbSet<VentaPasajeroOnline> VentaPasajeOnline { get; set; } //<clase> Nombre de la tabla


    //flota

    public DbSet<RegistroFlota> Rflota { get; set; } //<clase> Nombre de la tabla


    //Costos

    public DbSet<ccostofijo> Tordo_costosfijo { get; set; } //<clase> Nombre de la tabla
    public DbSet<ccostovariable> Tordo_costosvariables { get; set; } //<clase> Nombre de la tabla



    //Cuentas

    public DbSet<cuentas.Activo> Tordo_Contabilidad_Activos { get; set; }
    public DbSet<cuentas.Pasivo> Tordo_Contabilidad_Pasivos { get; set; }
    public DbSet<cuentas.Patrimonio> Tordo_Contabilidad_Patrimonios { get; set; }
    public DbSet<cuentas.Ingreso> Tordo_Contabilidad_Ingresos { get; set; }
    public DbSet<cuentas.Egreso> Tordo_Contabilidad_Egresos { get; set; }


  }

}


