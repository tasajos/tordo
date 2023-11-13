using System;
using System.ComponentModel.DataAnnotations;

namespace backend_Tordo.Models.Pasajeros
{
  public class VentaPasajero
  {
    public int id { get; set; }

    public int asiento { get; set; }

    public string fecha { get; set; }

    public string nombre { get; set; }

    public string apellidos { get; set; }

    public string nit { get; set; }

    public int ci { get; set; }

    public int precio { get; set; }

    public decimal preciocalculado { get; set; }

    public string tipo { get; set; }

    public string telefono { get; set; }

    public string email { get; set; }

    public string origen { get; set; }

    public string destino { get; set; }

    public string hora { get; set; }

    public string placa { get; set; }

    [DataType(DataType.Date)]
    [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
    public DateTime FechaNacimiento { get; set; }

    public string metodopago { get; set; }

    public string estado { get; set; }

    [DataType(DataType.Date)]
    [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
    public DateTime FechaCreacion { get; set; }
  }
}
