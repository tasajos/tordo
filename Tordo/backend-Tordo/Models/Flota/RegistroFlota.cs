namespace backend_Tordo.Models.Flota
{
  public class RegistroFlota
  {

    public int id { get; set; }

    public string placa { get; set; }

    public string conductor { get; set; }

    public string hora { get; set; }
    public string tipo { get; set; }

    public string cantidadpasajeros { get; set; }

    public string origen { get; set; }

    public string destino { get; set; }

    public string estado { get; set; }

    public int precio { get; set; }

    public decimal precioCalculado { get; set; }


    public DateTime FechaCreacion { get; set; }

    public DateTime fecharegistro { get; set; }
  }


}
