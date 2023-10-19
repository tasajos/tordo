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
  public class PasjController : ControllerBase
  {
    private readonly TordoContext _context;

    public PasjController(TordoContext context)
    {

      //RegistrosPasajeros
      _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var listapasajeros = await _context.PasajeCliente.ToListAsync();
        return Ok(listapasajeros);
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
        _context.Add(rflota);
        await _context.SaveChangesAsync();
        return CreatedAtAction("Get", new { Id = rflota.id }, rflota);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }



  }
}
