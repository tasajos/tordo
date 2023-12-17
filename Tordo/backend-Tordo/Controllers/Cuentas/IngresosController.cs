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
  public class IngresoController : ControllerBase
  {
    private readonly TordoContext _context;

    public IngresoController(TordoContext context)
    {
      _context = context;
    }

    // GET: api/Ingresos
    [HttpGet]
    public async Task<IActionResult> GetIngresos()
    {
      var ingresos = await _context.Tordo_Contabilidad_Ingresos.ToListAsync();
      return Ok(ingresos);
    }

    // GET: api/Ingresos/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetIngreso(int id)
    {
      var ingreso = await _context.Tordo_Contabilidad_Ingresos.FindAsync(id);

      if (ingreso == null)
      {
        return NotFound();
      }

      return Ok(ingreso);
    }

    // POST: api/Ingresos
    [HttpPost]
    public async Task<IActionResult> PostIngreso(cuentas.Ingreso ingreso)
    {
      _context.Tordo_Contabilidad_Ingresos.Add(ingreso);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetIngreso", new { id = ingreso.Id }, ingreso);
    }

    // PUT: api/Ingresos/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutIngreso(int id, cuentas.Ingreso ingreso)
    {
      if (id != ingreso.Id)
      {
        return BadRequest();
      }

      _context.Entry(ingreso).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!IngresoExists(id))
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

    // DELETE: api/Ingresos/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteIngreso(int id)
    {
      var ingreso = await _context.Tordo_Contabilidad_Ingresos.FindAsync(id);
      if (ingreso == null)
      {
        return NotFound();
      }

      _context.Tordo_Contabilidad_Ingresos.Remove(ingreso);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool IngresoExists(int id)
    {
      return _context.Tordo_Contabilidad_Ingresos.Any(e => e.Id == id);
    }
  }
}
