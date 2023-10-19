namespace backend_Tordo.Models.Flota
{
  public class RegistroFlota
  {

    public int id { get; set; }

    public string placa { get; set; }

    public string conductor { get; set; }

    public string hora { get; set; }
    public string tipo { get; set; }

    public int cantidadpasajeros { get; set; }

    public DateTime FechaCreacion { get; set; }
  }
}
