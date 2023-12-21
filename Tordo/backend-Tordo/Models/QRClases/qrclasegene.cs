namespace backend_Tordo.Models.QRClases
{
  public class qrclasegene
  {
    public string alias { get; set; }
    public string callback { get; set; }
    public string detalleGlosa { get; set; }
    public decimal monto { get; set; }
    public string moneda { get; set; }
    public string fechaVencimiento { get; set; }
    public string tipoSolicitud { get; set; }
    public bool unicoUso { get; set; }

  }

  public class ValidacionQrRequest
  {
    public string alias { get; set; }
  }


}
