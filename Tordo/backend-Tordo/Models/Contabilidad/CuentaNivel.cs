namespace backend_Tordo.Models.Contabilidad
{
  public class CuentaNivel
  {
    public class Cuenta
    {
      public int Id { get; set; }
      public int? ParentId { get; set; } // Null para nivel principal, no null para subnivel
      public string Nombre { get; set; }
      public string Tipo { get; set; } // "Activo", "Pasivo", "Patrimonio", "Ingreso", "Egreso"
      public int Nivel { get; set; }
      // Otros campos necesarios
    }

    public class EstructuraDto
    {
      public string Tipo { get; set; } // "Activo", "Pasivo", "Patrimonio", "Ingreso", "Egreso"
      public int Niveles { get; set; }
      public int[] Subniveles { get; set; }
    }



  }
}
