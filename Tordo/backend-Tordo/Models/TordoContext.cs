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


  }

}


