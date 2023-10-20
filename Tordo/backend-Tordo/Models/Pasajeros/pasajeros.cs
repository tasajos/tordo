namespace backend_Tordo.Models.Pasajeros
{
  public class pasajeros
  {
    public int id { get; set; }

    public string nombre { get; set; }

   public string apellidos { get; set; }

    public string ext { get; set; }
    public int ci { get; set; }

    public DateTime FechaNacimiento { get; set; }

    public int nit { get; set; }

    public string origen { get; set; }

    public string destino { get; set; }

    public string asiento { get; set; }

    public string metodopago { get; set; }

    public DateTime FechaCreacion { get; set; }
  }
}
