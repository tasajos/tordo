using Microsoft.AspNetCore.Mvc;
using backend_Tordo.Models.Costos;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using backend_Tordo.Models;

namespace backend_Tordo.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CostosController : ControllerBase
  {
    private readonly TordoContext _context;

    public CostosController(TordoContext context)
    {
      _context = context;
    }

    // GET: api/Costos/Fijos
    [HttpGet("Fijos")]
    public ActionResult<IEnumerable<ccostofijo>> GetCostosFijos()
    {
      return _context.Tordo_costosfijo.ToList();
    }

    // GET: api/Costos/Fijos/5
    [HttpGet("Fijos/{id}")]
    public ActionResult<ccostofijo> GetCostoFijo(int id)
    {
      var costofijo = _context.Tordo_costosfijo.Find(id);
      if (costofijo == null)
      {
        return NotFound();
      }
      return costofijo;
    }

    // GET: api/Costos/Variables
    [HttpGet("Variables")]
    public ActionResult<IEnumerable<ccostovariable>> GetCostosVariables()
    {
      return _context.Tordo_costosvariables.ToList();
    }

    // GET: api/Costos/Variables/5
    [HttpGet("Variables/{id}")]
    public ActionResult<ccostovariable> GetCostoVariable(int id)
    {
      var costovariable = _context.Tordo_costosvariables.Find(id);
      if (costovariable == null)
      {
        return NotFound();
      }
      return costovariable;
    }

    // POST: api/Costos/Fijos
    [HttpPost("Fijos")]
    public ActionResult<ccostofijo> CreateCostoFijo(ccostofijo costofijo)
    {
      _context.Tordo_costosfijo.Add(costofijo);
      _context.SaveChanges();

      return CreatedAtAction(nameof(GetCostoFijo), new { id = costofijo.id }, costofijo);
    }

    // POST: api/Costos/Variables
    [HttpPost("Variables")]
    public ActionResult<ccostovariable> CreateCostoVariable(ccostovariable costovariable)
    {
      _context.Tordo_costosvariables.Add(costovariable);
      _context.SaveChanges();

      return CreatedAtAction(nameof(GetCostoVariable), new { id = costovariable.id }, costovariable);
    }

    // PUT: api/Costos/Fijos/5
    [HttpPut("Fijos/{id}")]
    public IActionResult UpdateCostoFijo(int id, ccostofijo costofijo)
    {
      if (id != costofijo.id)
      {
        return BadRequest();
      }

      _context.Entry(costofijo).State = EntityState.Modified;

      try
      {
        _context.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!_context.Tordo_costosfijo.Any(e => e.id == id))
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

    // PUT: api/Costos/Variables/5
    [HttpPut("Variables/{id}")]
    public IActionResult UpdateCostoVariable(int id, ccostovariable costovariable)
    {
      if (id != costovariable.id)
      {
        return BadRequest();
      }

      _context.Entry(costovariable).State = EntityState.Modified;

      try
      {
        _context.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!_context.Tordo_costosvariables.Any(e => e.id == id))
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

    // DELETE: api/Costos/Fijos/5
    [HttpDelete("Fijos/{id}")]
    public IActionResult DeleteCostoFijo(int id)
    {
      var costofijo = _context.Tordo_costosfijo.Find(id);
      if (costofijo == null)
      {
        return NotFound();
      }

      _context.Tordo_costosfijo.Remove(costofijo);
      _context.SaveChanges();

      return NoContent();
    }

    // DELETE: api/Costos/Variables/5
    [HttpDelete("Variables/{id}")]
    public IActionResult DeleteCostoVariable(int id)
    {
      var costovariable = _context.Tordo_costosvariables.Find(id);
      if (costovariable == null)
      {
        return NotFound();
      }

      _context.Tordo_costosvariables.Remove(costovariable);
      _context.SaveChanges();

      return NoContent();
    }
  }
}
