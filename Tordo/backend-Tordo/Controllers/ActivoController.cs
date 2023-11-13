using backend_Tordo.Models;
using backend_Tordo.Models.Contabilidad;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend_Tordo.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ActivoController : ControllerBase
  {
    private readonly TordoContext _context;

    public ActivoController(TordoContext context)
    {
      _context = context;
    }
    // GET: api/Activos
    [HttpGet]
    public async Task<IActionResult> GetActivos()
    {
      var activos = await _context.Tordo_Contabilidad_Activos.ToListAsync();
      return Ok(activos);
    }

    // GET: api/Activos/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetActivo(int id)
    {
      var activo = await _context.Tordo_Contabilidad_Activos.FindAsync(id);

      if (activo == null)
      {
        return NotFound();
      }

      return Ok(activo);
    }

    // POST: api/Activos
    [HttpPost]
    public async Task<IActionResult> PostActivo(cuentas.Activo activo)
    {
      _context.Tordo_Contabilidad_Activos.Add(activo);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetActivo", new { id = activo.Id }, activo);
    }

    // PUT: api/Activos/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutActivo(int id, cuentas.Activo activo)
    {
      if (id != activo.Id)
      {
        return BadRequest();
      }

      _context.Entry(activo).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ActivoExists(id))
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

    // DELETE: api/Activos/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteActivo(int id)
    {
      var activo = await _context.Tordo_Contabilidad_Activos.FindAsync(id);
      if (activo == null)
      {
        return NotFound();
      }

      _context.Tordo_Contabilidad_Activos.Remove(activo);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool ActivoExists(int id)
    {
      return _context.Tordo_Contabilidad_Activos.Any(e => e.Id == id);
    }
  }


}

