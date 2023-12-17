using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace backend_Tordo.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class GenerarQRController : ControllerBase
  {
    private readonly HttpClient _httpClient;

    public GenerarQRController()
    {
      _httpClient = new HttpClient();
      _httpClient.BaseAddress = new Uri("https://sip.mc4.com.bo:8443/");
    }

    [HttpPost]
    public async Task<IActionResult> GenerarQr()
    {
      try
      {
        // Define los datos que se enviarán en el cuerpo de la solicitud POST
        var requestContent = new
        {
          alias = "pruebaprod2",
          callback = "000",
          detalleGlosa = "prueba2",
          monto = 40.0,
          moneda = "BOB",
          fechaVencimiento = "30/12/2023",
          tipoSolicitud = "API",
          unicoUso = true
        };

        // Convierte los datos en formato JSON
        var jsonContent = JsonConvert.SerializeObject(requestContent);
        var stringContent = new StringContent(jsonContent, Encoding.UTF8, "application/json");

        // Configura los encabezados de la solicitud
        _httpClient.DefaultRequestHeaders.Add("apikeyServicio", "ad3abc8fda3e938efbd6601dd0bd0e7883eeec4d27da85e1");
        _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "eyJhbGciOiJIUzUxMiJ9.eyJOb21icmUiOiJKVUFOQSBKVUxJQU5BIFZBU1FVRVogVklMTEFSUk9FTCIsInN1YiI6IkpVQU5BSiIsIlRpcG8iOiJFTVBSRVNBIiwiU3VidGlwbyI6bnVsbCwiSWRVc3UwcmlvIjoyOTMwNiwiT2JzZXJ2YWRvIjpmYWxzZSwiTWVudSI6W3sidGl0dWxvIjoiQWRtaW5pc3RyYWNpw7NuIiwib3JkZW4iOjEsImxpc3RhUGVybWlzbyI6W3siaWRQZXJtaXNvIjoxNSwibm9tYnJlIjoiVXN1YXJpb3MiLCJ2YWxvciI6Ii91c3VhcmlvcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfV19LHsidGl0dWxvIjoiVHJhbnNmZXJlbmNpYXMiLCJvcmRlbiI6MCwibGlzdGFQZXJtaXNvIjpbeyJpZFBlcm1pc28iOjE3LCJub21icmUiOiJUcmFuc2FjY2lvbmVzIiwidmFsb3IiOiIvdHJhbnNhY2Npb25lcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfSx7ImlkUGVybWlzbyI6MjMsIm5vbWJyZSI6IlJlcG9ydGVzIiwidmFsb3IiOiIvcmVwb3J0ZXMiLCJvcmRlbiI6MSwiX19oaWpvcyI6bnVsbH1dfSx7InRpdHVsbyI6IkVudGlkYWRlcyIsIm9yZGVuIjozLCJsaXN0YVBlcm1pc28iOlt7ImlkUGVybWlzbyI6MjEsIm5vbWJyZSI6IlNlcnZpY2lvcyIsInZhbG9yIjoiL3NlcnZpY2lvcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfSx7ImlkUGVybWlzbyI6OTcsIm5vbWJyZSI6IkVzdHJ1Y3R1cmEiLCJ2YWxvciI6Ii9lc3RydWN0dXJhIiwib3JkZW4iOjIsIl9faGlqb3MiOm51bGx9XX1dLCJleHAiOjE3MDI2OTk3NTQsImlhdCI6MTcwMjY5NjE1NCwiRW50aWRhZCI6MTY5NTB9.NGh1HtnKf1DUS4mY___3jCxbEfY44HqnohpN6e_e8UUBogR87ELNWlfzj8uDIujToBRQiGfZbJwm3FgbnuObQQ");

        // Realiza la solicitud POST al servicio web
        var response = await _httpClient.PostAsync("api/v1/generaQr", stringContent);

        // Verifica si la solicitud fue exitosa
        if (response.IsSuccessStatusCode)
        {
          // Lee la respuesta como una cadena JSON
          var jsonResponse = await response.Content.ReadAsStringAsync();

          // Puedes procesar la respuesta aquí según tus necesidades
          return Ok(jsonResponse);
        }
        else
        {
          // Maneja los errores de la solicitud
          return StatusCode((int)response.StatusCode, response.ReasonPhrase);
        }
      }
      catch (Exception ex)
      {
        // Maneja las excepciones
        return StatusCode(500, ex.Message);
      }
    }
  }
}
