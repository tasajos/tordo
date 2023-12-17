using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend_Tordo.Models; // Asegúrate de que este using esté correcto según tu estructura
using System.Threading.Tasks;
using backend_Tordo.Controllers.Cuentas; // Asegúrate de que este using esté correcto según tu estructura
using backend_Tordo.Models.Contabilidad;

namespace backend_Tordo.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class EgresoController : ControllerBase
  {
    private readonly TordoContext _context;

    public EgresoController(TordoContext context)
    {
      _context = context;
    }

    // GET: api/Egresos
    [HttpGet]
    public async Task<IActionResult> GetEgresos()
    {
      var egresos = await _context.Tordo_Contabilidad_Egresos.ToListAsync();
      return Ok(egresos);
    }

    // GET: api/Egresos/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetEgreso(int id)
    {
      var egreso = await _context.Tordo_Contabilidad_Egresos.FindAsync(id);

      if (egreso == null)
      {
        return NotFound();
      }

      return Ok(egreso);
    }

    // POST: api/Egresos
    [HttpPost]
    public async Task<IActionResult> PostEgreso(cuentas.Egreso egreso)
    {
      _context.Tordo_Contabilidad_Egresos.Add(egreso);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetEgreso", new { id = egreso.Id }, egreso);
    }

    // PUT: api/Egresos/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutEgreso(int id, cuentas.Egreso egreso)
    {
      if (id != egreso.Id)
      {
        return BadRequest();
      }

      _context.Entry(egreso).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!EgresoExists(id))
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

    // DELETE: api/Egresos/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteEgreso(int id)
    {
      var egreso = await _context.Tordo_Contabilidad_Egresos.FindAsync(id);
      if (egreso == null)
      {
        return NotFound();
      }

      _context.Tordo_Contabilidad_Egresos.Remove(egreso);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool EgresoExists(int id)
    {
      return _context.Tordo_Contabilidad_Egresos.Any(e => e.Id == id);
    }
  }
}
