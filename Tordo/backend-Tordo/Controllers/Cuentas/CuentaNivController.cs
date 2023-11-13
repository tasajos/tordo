using backend_Tordo.Models;
using backend_Tordo.Models.Contabilidad;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static backend_Tordo.Models.Contabilidad.CuentaNivel;

namespace backend_Tordo.Controllers.Cuentas
{
  [Route("api/[controller]")]
  [ApiController]
  public class CuentaNivController : ControllerBase
  {
    private readonly TordoContext _context;

    public CuentaNivController(TordoContext context)
    {
      _context = context;
    }
    [HttpPost("CrearEstructura")]
    public async Task<IActionResult> CrearEstructura([FromBody] EstructuraDto estructura)
    {
      if (estructura == null || estructura.Niveles <= 0)
      {
        return BadRequest("La estructura proporcionada no es válida.");
      }

      try
      {
        for (int i = 1; i <= estructura.Niveles; i++)
        {
          // Crear nivel principal
          var cuentaPrincipal = new Cuenta
          {
            Nombre = $"{i}",
            Tipo = estructura.Tipo,
            Nivel = i,
            ParentId = null // No tiene padre porque es un nivel principal
          };
          _context.Tordo_Contabilidad_Registrosnivels.Add(cuentaPrincipal);
          await _context.SaveChangesAsync(); // Guardar para obtener el Id

          // Crear subniveles si existen
          if (estructura.Subniveles != null && estructura.Subniveles.Length >= i && estructura.Subniveles[i - 1] > 0)
          {
            for (int j = 1; j <= estructura.Subniveles[i - 1]; j++)
            {
              var cuentaSubnivel = new Cuenta
              {
                Nombre = $"{i}.{j}",
                Tipo = estructura.Tipo,
                Nivel = i,
                ParentId = cuentaPrincipal.Id // Asignar el ID del nivel principal
              };
              _context.Tordo_Contabilidad_Registrosnivels.Add(cuentaSubnivel);
            }
            await _context.SaveChangesAsync(); // Guardar subniveles
          }
        }

        return Ok(new { message = "Estructura creada con éxito." });
      }
      catch (Exception ex)
      {
        // Log the exception here
        return StatusCode(500, "Un error ocurrió mientras se procesaba su solicitud: " + ex.Message);
      }
    }


    [HttpGet("ObtenerEstructuras")]
    public IActionResult ObtenerEstructuras()
    {
      try
      {
        var estructuras = _context.Tordo_Contabilidad_Registrosnivels
            .Where(c => c.ParentId == null) // Obtener solo niveles principales
            .Select(c => new
            {
              c.Id,
              c.Nombre,
              c.Tipo,
              c.Nivel,
              Subniveles = _context.Tordo_Contabilidad_Registrosnivels
                    .Where(sub => sub.ParentId == c.Id) // Obtener subniveles
                    .OrderBy(sub => sub.Nivel)
                    .Select(sub => new { sub.Id, sub.Nombre })
                    .ToList()
            })
            .ToList();

        return Ok(estructuras);
      }
      catch (Exception ex)
      {
        // Log the exception here
        return StatusCode(500, "Un error ocurrió mientras se procesaba su solicitud: " + ex.Message);
      }
    }
  }


}
