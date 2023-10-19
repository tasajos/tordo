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


    //flota

    public DbSet<RegistroFlota> Rflota { get; set; } //<clase> Nombre de la tabla


  }

}


