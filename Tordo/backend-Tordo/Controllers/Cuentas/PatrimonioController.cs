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
  public class PatrimonioController : ControllerBase
  {
    private readonly TordoContext _context;

    public PatrimonioController(TordoContext context)
    {
      _context = context;
    }

    // GET: api/Patrimonios
    [HttpGet]
    public async Task<IActionResult> GetPatrimonios()
    {
      var patrimonios = await _context.Tordo_Contabilidad_Patrimonios.ToListAsync();
      return Ok(patrimonios);
    }

    // GET: api/Patrimonios/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetPatrimonio(int id)
    {
      var patrimonio = await _context.Tordo_Contabilidad_Patrimonios.FindAsync(id);

      if (patrimonio == null)
      {
        return NotFound();
      }

      return Ok(patrimonio);
    }

    // POST: api/Patrimonios
    [HttpPost]
    public async Task<IActionResult> PostPatrimonio(cuentas.Patrimonio patrimonio)
    {
      _context.Tordo_Contabilidad_Patrimonios.Add(patrimonio);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetPatrimonio", new { id = patrimonio.Id }, patrimonio);
    }

    // PUT: api/Patrimonios/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPatrimonio(int id, cuentas.Patrimonio patrimonio)
    {
      if (id != patrimonio.Id)
      {
        return BadRequest();
      }

      _context.Entry(patrimonio).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!PatrimonioExists(id))
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

    // DELETE: api/Patrimonios/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePatrimonio(int id)
    {
      var patrimonio = await _context.Tordo_Contabilidad_Patrimonios.FindAsync(id);
      if (patrimonio == null)
      {
        return NotFound();
      }

      _context.Tordo_Contabilidad_Patrimonios.Remove(patrimonio);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool PatrimonioExists(int id)
    {
      return _context.Tordo_Contabilidad_Patrimonios.Any(e => e.Id == id);
    }
  }
}
