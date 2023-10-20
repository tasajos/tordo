using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using backend_Tordo.Models;
using backend_Tordo.Models.Flota;
using backend_Tordo.Models.Pasajeros;

namespace backend_Tordo.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PasjController : ControllerBase
  {
    private readonly TordoContext _context;

    public PasjController(TordoContext context)
    {

      //RegistrosTicketPersonal
      _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var listapasajero = await _context.PasajeCliente.ToListAsync();
        return Ok(listapasajero);
      }
      catch (Exception ex)
      {

        return BadRequest(ex.Message);


      }
    }
    [HttpPost]
    public async Task<IActionResult> Post(pasajeros pasajecliente)
    {
      try
      {
        pasajecliente.FechaCreacion = DateTime.Now;
        _context.Add(pasajecliente);
        await _context.SaveChangesAsync();
        return CreatedAtAction("Get", new { Id = pasajecliente.id }, pasajecliente);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }



  }
}
