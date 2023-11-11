namespace backend_Tordo.Models.Contabilidad
{
  public class cuentas
  {

    public class Activo
    {
      public int Id { get; set; }
      public string Categoria { get; set; }
      public string Descripcion { get; set; }
      public decimal Monto { get; set; }
      public DateTime FechaAdquisicion { get; set; }
      public DateTime? FechaValoracion { get; set; }
      public int? VidaUtilEstimada { get; set; }
    }

    public class Pasivo
    {
      public int Id { get; set; }
      public string Categoria { get; set; }
      public string Descripcion { get; set; }
      public decimal Monto { get; set; }
      public DateTime FechaIncidencia { get; set; }
      public DateTime FechaVencimiento { get; set; }
    }

    public class Patrimonio
    {
      public int Id { get; set; }
      public string Tipo { get; set; }
      public string Descripcion { get; set; }
      public decimal Monto { get; set; }
      public DateTime FechaRegistro { get; set; }
    }

    public class Ingreso
    {
      public int Id { get; set; }
      public string Categoria { get; set; }
      public string Descripcion { get; set; }
      public decimal Monto { get; set; }
      public DateTime FechaRegistro { get; set; }
      public string Fuente { get; set; }
      public int CuentaRelacionadaId { get; set; }
    }

    public class Egreso
    {
      public int Id { get; set; }
      public string Categoria { get; set; }
      public string Descripcion { get; set; }
      public decimal Monto { get; set; }
      public DateTime FechaRegistro { get; set; }
      public string Destinatario { get; set; }
      public int CuentaRelacionadaId { get; set; }
    }

  }
}
