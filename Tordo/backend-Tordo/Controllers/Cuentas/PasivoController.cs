using backend_Tordo.Models;
using Microsoft.AspNetCore.Http;
using backend_Tordo.Models.Contabilidad;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend_Tordo.Controllers.Cuentas
{
  [Route("api/[controller]")]
  [ApiController]
  public class PasivoController : ControllerBase
  {

    private readonly TordoContext _context;

    public PasivoController(TordoContext context)
    {
      _context = context;
    }
    // GET: api/Pasivo
    [HttpGet]
    public async Task<IActionResult> GetPasivos()
    {
      var pasivos = await _context.Tordo_Contabilidad_Pasivos.ToListAsync();
      return Ok(pasivos);
    }

    // GET: api/Pasivo/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetPasivo(int id)
    {
      var pasivo = await _context.Tordo_Contabilidad_Pasivos.FindAsync(id);

      if (pasivo == null)
      {
        return NotFound();
      }

      return Ok(pasivo);
    }

    // POST: api/Pasivo
    [HttpPost]
    public async Task<IActionResult> PostPasivo(cuentas.Pasivo pasivo)
    {
      _context.Tordo_Contabilidad_Pasivos.Add(pasivo);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetPasivo", new { id = pasivo.Id }, pasivo);
    }

    // PUT: api/Pasivo/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPasivo(int id, cuentas.Pasivo pasivo)
    {
      if (id != pasivo.Id)
      {
        return BadRequest();
      }

      _context.Entry(pasivo).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!PasivoExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // DELETE: api/Pasivo/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePasivo(int id)
    {
      var pasivo = await _context.Tordo_Contabilidad_Pasivos.FindAsync(id);
      if (pasivo == null)
      {
        return NotFound();
      }

      _context.Tordo_Contabilidad_Pasivos.Remove(pasivo);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool PasivoExists(int id)
    {
      return _context.Tordo_Contabilidad_Pasivos.Any(e => e.Id == id);
    }
  }
}
