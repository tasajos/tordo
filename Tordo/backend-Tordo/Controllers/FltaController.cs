using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using backend_Tordo.Models;
using backend_Tordo.Models.Flota;

namespace backend_Tordo.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FltaController : ControllerBase
  {
     private readonly TordoContext _context;

      public FltaController(TordoContext context)
      {

        //Registrosflota
        _context = context;
      }

      [HttpGet]
      public async Task<IActionResult> Get()
      {
        try
        {
          var listaflota = await _context.Rflota.ToListAsync();
          return Ok(listaflota);
        }
        catch (Exception ex)
        {

          return BadRequest(ex.Message);


        }
      }

    [HttpPost]
    public async Task<IActionResult> Post(RegistroFlota rflota)
    {
      try
      {
        rflota.FechaCreacion = DateTime.Now;

        // Calcular el precio calculado
        rflota.precioCalculado = (rflota.precio + 0.14m) -rflota.precio;

        _context.Add(rflota);
        await _context.SaveChangesAsync();
        return CreatedAtAction("Get", new { Id = rflota.id }, rflota);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
    [HttpGet("buscar/{origen}/{destino}")]
    public ActionResult<IEnumerable<RegistroFlota>> BuscarPorOrigenYDestino(string origen, string destino)
    {
      try
      {
        // Realiza la búsqueda en la base de datos utilizando los parámetros origen y destino
        var resultados = _context.Rflota
            .Where(r => r.origen.ToLower() == origen.ToLower() && r.destino.ToLower() == destino.ToLower())
            .ToList();

        if (resultados.Count == 0)
        {
          // Si no se encontraron resultados, crea una respuesta personalizada
          var respuestaNoEncontrada = new
          {
            Mensaje = "No se encontraron resultados"
          };

          // Devuelve la respuesta personalizada con un código de estado 200 (OK)
          return Ok(respuestaNoEncontrada);
        }

        return Ok(resultados);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
    [HttpGet("buscar/{origen}/{destino}/{fechaRegistro}")]
    public ActionResult<IEnumerable<RegistroFlota>> BuscarPorOrigenDestinoYFecha(string origen, string destino, DateTime fechaRegistro)
    {
      try
      {
        // Realiza la búsqueda en la base de datos utilizando los parámetros origen, destino y fecha de registro
        var resultados = _context.Rflota
            .Where(r => r.origen.ToLower() == origen.ToLower()
                     && r.destino.ToLower() == destino.ToLower()
                     && r.fecharegistro.Date == fechaRegistro.Date) // Filtrar por la fecha sin hora ni minutos
            .ToList();

        if (resultados.Count == 0)
        {
          // Si no se encontraron resultados, crea una respuesta personalizada
          var respuestaNoEncontrada = new
          {
            Mensaje = "No se encontraron resultados"
          };

          // Devuelve la respuesta personalizada con un código de estado 200 (OK)
          return Ok(respuestaNoEncontrada);
        }

        return Ok(resultados);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }




  }
}
