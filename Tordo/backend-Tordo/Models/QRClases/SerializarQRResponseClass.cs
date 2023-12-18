using System.ComponentModel.DataAnnotations;

namespace backend_Tordo.Models.QRClases
{

    public class RespuestaModelo
    {
      public int Id { get; set; }
      public string codigo { get; set; }
      public string mensaje { get; set; }
      public ObjetoRespuesta objeto { get; set; }
      public PageInfo pageInfo { get; set; }
    }

    public class ObjetoRespuesta
    {
    public int Id { get; set; }
    public string imagenQr { get; set; }
      public string idQr { get; set; }
      public string fechaVencimiento { get; set; }
      public string bancoDestino { get; set; }
      public string cuentaDestino { get; set; }
      public int idTransaccion { get; set; }
    }

    public class PageInfo
    {
    [Key]
    public int PageInfoId { get; set; }// Si tienes información en PageInfo, debes agregar las propiedades aquí
  }

  }

