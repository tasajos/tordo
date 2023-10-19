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



  }

}


