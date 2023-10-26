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


    [HttpGet("ventaticket")]
    public async Task<IActionResult> GetVentaTicket()
    {
      try
      {
        var listaventa = await _context.VentaPasajeCliente.ToListAsync();
        return Ok(listaventa);
      }
      catch (Exception ex)
      {

        return BadRequest(ex.Message);


      }
    }

    [HttpPost("pventaticket")]
    public async Task<IActionResult> Post(VentaPasajero VentaPasajeCliente)
    {
      try
      {
        VentaPasajeCliente.FechaCreacion = DateTime.Now;
        VentaPasajeCliente.estado = "1"; // Asigna el valor "1" al campo estado
        VentaPasajeCliente.preciocalculado = 0.14m; // Asigna el valor 0.14 al campo preciocalculado
        _context.Add(VentaPasajeCliente);
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetVentaTicket", new { Id = VentaPasajeCliente.id }, VentaPasajeCliente);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }


    [HttpGet("byplaca/{placa}")]

    //get por placa
    public async Task<IActionResult> GetByPlaca(string placa)
    {
      try
      {
        var pasajeroPorPlaca = await _context.VentaPasajeCliente.Where(p => p.placa == placa).ToListAsync();

        if (!pasajeroPorPlaca.Any())
        {
          return NotFound($"No se encontraron pasajeros con la placa {placa}");
        }

        return Ok(pasajeroPorPlaca);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }


  }
}
