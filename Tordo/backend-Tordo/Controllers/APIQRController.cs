using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using backend_Tordo.Models.QRClases;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;




namespace backend_Tordo.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class APIQRController : ControllerBase
  {
    private readonly HttpClient _httpClient;

    public APIQRController()
    {
      _httpClient = new HttpClient();
      _httpClient.BaseAddress = new Uri("https://sip.mc4.com.bo:8443/");
    }

    [HttpPost]
    public async Task<IActionResult> GenerarToken()
    {
      try
      {
        // Define los datos que se enviarán en el cuerpo de la solicitud POST
        var requestContent = new
        {
          username = "JUANAJ",
          password = "8033310JJvv"
        };

        // Convierte los datos en formato JSON
        var jsonContent = JsonConvert.SerializeObject(requestContent);
        var stringContent = new StringContent(jsonContent, Encoding.UTF8, "application/json");

        // Configura los encabezados de la solicitud
        _httpClient.DefaultRequestHeaders.Add("apikey", "5e1dc11b9a58a6930ad8d5466cf4e2b7bf7c3afe269d5d77");

        // Realiza la solicitud POST al servicio web
        var response = await _httpClient.PostAsync("autenticacion/v1/generarToken", stringContent);

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

    /*
    [HttpPost("generaQr")]
    public async Task<IActionResult> GenerarQr()
    {
      try
      {
        // Define los datos que se enviarán en el cuerpo de la solicitud POST
        var requestData = new
        {
          alias = "prueba1612",
          callback = "000",
          detalleGlosa = "prueba2",
          monto = 20,
          moneda = "BOB",
          fechaVencimiento = "30/12/2023",
          tipoSolicitud = "API",
          unicoUso = true
        };

        // Convierte los datos en formato JSON
        var jsonContent = JsonConvert.SerializeObject(requestData);
        var stringContent = new StringContent(jsonContent, Encoding.UTF8, "application/json");

        // Configura los encabezados de la solicitud
        _httpClient.DefaultRequestHeaders.Add("apikeyServicio", "ad3abc8fda3e938efbd6601dd0bd0e7883eeec4d27da85e1");
        _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "eyJhbGciOiJIUzUxMiJ9.eyJOb21icmUiOiJKVUFOQSBKVUxJQU5BIFZBU1FVRVogVklMTEFSUk9FTCIsInN1YiI6IkpVQU5BSiIsIlRpcG8iOiJFTVBSRVNBIiwiU3VidGlwbyI6bnVsbCwiSWRVc3VhcmlvIjoyOTMwNiwiT2JzZXJ2YWRvIjpmYWxzZSwiTWVudSI6W3sidGl0dWxvIjoiQWRtaW5pc3RyYWNpw7NuIiwib3JkZW4iOjEsImxpc3RhUGVybWlzbyI6W3siaWRQZXJtaXNvIjoxNSwibm9tYnJlIjoiVXN1YXJpb3MiLCJ2YWxvciI6Ii91c3VhcmlvcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfV19LHsidGl0dWxvIjoiVHJhbnNmZXJlbmNpYXMiLCJvcmRlbiI6MCwibGlzdGFQZXJtaXNvIjpbeyJpZFBlcm1pc28iOjE3LCJub21icmUiOiJUcmFuc2FjY2lvbmVzIiwidmFsb3IiOiIvdHJhbnNhY2Npb25lcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfSx7ImlkUGVybWlzbyI6MjMsIm5vbWJyZSI6IlJlcG9ydGVzIiwidmFsb3IiOiIvcmVwb3J0ZXMiLCJvcmRlbiI6MSwiX19oaWpvcyI6bnVsbH1dfSx7InRpdHVsbyI6IkVudGlkYWRlcyIsIm9yZGVuIjozLCJsaXN0YVBlcm1pc28iOlt7ImlkUGVybWlzbyI6MjEsIm5vbWJyZSI6IlNlcnZpY2lvcyIsInZhbG9yIjoiL3NlcnZpY2lvcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfSx7ImlkUGVybWlzbyI6OTcsIm5vbWJyZSI6IkVzdHJ1Y3R1cmEiLCJ2YWxvciI6Ii9lc3RydWN0dXJhIiwib3JkZW4iOjIsIl9faGlqb3MiOm51bGx9XX1dLCJleHAiOjE3MDI3NTc5OTMsImlhdCI6MTcwMjc1NDM5MywiRW50aWRhZCI6MTY5NTB9.r1SYw9--GHPmazLV33aTGgASAeBO2zV18YDfmxx8jA_aNtcc8KHIjGLVoI4Is125VmYc1lPb1M_smKrorVWyJw");

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

    */
    [HttpPost("generaQr")]
    public async Task<IActionResult> GenerarQr([FromBody] qrclasegene requestData)
    {
      try
      {
        // Convierte los datos en formato JSON (esto no es necesario si deseas devolver los mismos datos en la respuesta)
        var jsonContent = JsonConvert.SerializeObject(requestData);

        // Configura los encabezados de la solicitud
        _httpClient.DefaultRequestHeaders.Add("apikeyServicio", "ad3abc8fda3e938efbd6601dd0bd0e7883eeec4d27da85e1");
        _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "eyJhbGciOiJIUzUxMiJ9.eyJOb21icmUiOiJKVUFOQSBKVUxJQU5BIFZBU1FVRVogVklMTEFSUk9FTCIsInN1YiI6IkpVQU5BSiIsIlRpcG8iOiJFTVBSRVNBIiwiU3VidGlwbyI6bnVsbCwiSWRVc3VhcmlvIjoyOTMwNiwiT2JzZXJ2YWRvIjpmYWxzZSwiTWVudSI6W3sidGl0dWxvIjoiQWRtaW5pc3RyYWNpw7NuIiwib3JkZW4iOjEsImxpc3RhUGVybWlzbyI6W3siaWRQZXJtaXNvIjoxNSwibm9tYnJlIjoiVXN1YXJpb3MiLCJ2YWxvciI6Ii91c3VhcmlvcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfV19LHsidGl0dWxvIjoiVHJhbnNmZXJlbmNpYXMiLCJvcmRlbiI6MCwibGlzdGFQZXJtaXNvIjpbeyJpZFBlcm1pc28iOjE3LCJub21icmUiOiJUcmFuc2FjY2lvbmVzIiwidmFsb3IiOiIvdHJhbnNhY2Npb25lcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfSx7ImlkUGVybWlzbyI6MjMsIm5vbWJyZSI6IlJlcG9ydGVzIiwidmFsb3IiOiIvcmVwb3J0ZXMiLCJvcmRlbiI6MSwiX19oaWpvcyI6bnVsbH1dfSx7InRpdHVsbyI6IkVudGlkYWRlcyIsIm9yZGVuIjozLCJsaXN0YVBlcm1pc28iOlt7ImlkUGVybWlzbyI6MjEsIm5vbWJyZSI6IlNlcnZpY2lvcyIsInZhbG9yIjoiL3NlcnZpY2lvcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfSx7ImlkUGVybWlzbyI6OTcsIm5vbWJyZSI6IkVzdHJ1Y3R1cmEiLCJ2YWxvciI6Ii9lc3RydWN0dXJhIiwib3JkZW4iOjIsIl9faGlqb3MiOm51bGx9XX1dLCJleHAiOjE3MDI4NTE0MDEsImlhdCI6MTcwMjg0NzgwMSwiRW50aWRhZCI6MTY5NTB9.Omlbx6dbxbqKj9AIIBxBkbBcJzKcVghqUYqDMAPrDkU9ldt7F5v2OqTpUhVKauE5ottXaYKHoslx4gpUJH7xZw");

        // Realiza la solicitud POST al servicio web (puedes usar requestData en lugar de requestData.alias, etc.)
        var response = await _httpClient.PostAsJsonAsync("api/v1/generaQr", requestData);

        // Verifica si la solicitud fue exitosa
        if (response.IsSuccessStatusCode)
        {
          // Lee la respuesta como una cadena JSON (esto no es necesario si deseas devolver los mismos datos en la respuesta)
          var jsonResponse = await response.Content.ReadAsStringAsync();

          // Deserializa la respuesta JSON en un objeto RespuestaModelo
          var respuestaModelo = JsonConvert.DeserializeObject<RespuestaModelo>(jsonResponse);

          // Puedes acceder a los datos en respuestaModelo.objeto
          string codigo = respuestaModelo.codigo;
          string mensaje = respuestaModelo.mensaje;
          string imagenQr = respuestaModelo.objeto.imagenQr;
          // Y así sucesivamente...

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


    [HttpPost("generaQrT")]
    public async Task<IActionResult> GenerarQrT()
    {
      try
      {
        // Define los datos que se enviarán en el cuerpo de la solicitud POST
        var requestData = new
        {
          alias = "pruebaprod2c",
          callback = "000",
          detalleGlosa = "prueba2",
          monto = 40.0,
          moneda = "BOB",
          fechaVencimiento = "30/12/2023",
          tipoSolicitud = "API",
          unicoUso = true
        };

        // Convierte los datos en formato JSON
        var jsonContent = JsonConvert.SerializeObject(requestData);
        var stringContent = new StringContent(jsonContent, Encoding.UTF8, "application/json");

        // Configura los encabezados de la solicitud
        _httpClient.DefaultRequestHeaders.Add("apikeyServicio", "ad3abc8fda3e938efbd6601dd0bd0e7883eeec4d27da85e1");
        _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "eyJhbGciOiJIUzUxMiJ9.eyJOb21icmUiOiJKVUFOQSBKVUxJQU5BIFZBU1FVRVogVklMTEFSUk9FTCIsInN1YiI6IkpVQU5BSiIsIlRpcG8iOiJFTVBSRVNBIiwiU3VidGlwbyI6bnVsbCwiSWRVc3VhcmlvIjoyOTMwNiwiT2JzZXJ2YWRvIjpmYWxzZSwiTWVudSI6W3sidGl0dWxvIjoiQWRtaW5pc3RyYWNpw7NuIiwib3JkZW4iOjEsImxpc3RhUGVybWlzbyI6W3siaWRQZXJtaXNvIjoxNSwibm9tYnJlIjoiVXN1YXJpb3MiLCJ2YWxvciI6Ii91c3VhcmlvcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfV19LHsidGl0dWxvIjoiVHJhbnNmZXJlbmNpYXMiLCJvcmRlbiI6MCwibGlzdGFQZXJtaXNvIjpbeyJpZFBlcm1pc28iOjE3LCJub21icmUiOiJUcmFuc2FjY2lvbmVzIiwidmFsb3IiOiIvdHJhbnNhY2Npb25lcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfSx7ImlkUGVybWlzbyI6MjMsIm5vbWJyZSI6IlJlcG9ydGVzIiwidmFsb3IiOiIvcmVwb3J0ZXMiLCJvcmRlbiI6MSwiX19oaWpvcyI6bnVsbH1dfSx7InRpdHVsbyI6IkVudGlkYWRlcyIsIm9yZGVuIjozLCJsaXN0YVBlcm1pc28iOlt7ImlkUGVybWlzbyI6MjEsIm5vbWJyZSI6IlNlcnZpY2lvcyIsInZhbG9yIjoiL3NlcnZpY2lvcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfSx7ImlkUGVybWlzbyI6OTcsIm5vbWJyZSI6IkVzdHJ1Y3R1cmEiLCJ2YWxvciI6Ii9lc3RydWN0dXJhIiwib3JkZW4iOjIsIl9faGlqb3MiOm51bGx9XX1dLCJleHAiOjE3MDI2OTk3NTQsImlhdCI6MTcwMjY5NjE1NCwiRW50aWRhZCI6MTY5NTB9.NGh1HtnKf1DUS4mY___3jCxbEfY44HqnohpN6e_e8UUBogR87ELNWlfzj8uDIujToBRQiGfZbJwm3FgbnuObQQ");

        // Realiza la solicitud POST al servicio web
        var response = await _httpClient.PostAsync("https://sip.mc4.com.bo:8443/api/v1/generaQr", stringContent);

        // Verifica si la solicitud fue exitosa
        if (response.IsSuccessStatusCode)
        {
          // Lee la respuesta como una cadena JSON
          var jsonResponse = await response.Content.ReadAsStringAsync();

          // Deserializa la respuesta JSON en una instancia de ApiResponse
          var apiResponse = JsonConvert.DeserializeObject<ApiResponse>(jsonResponse);

          // Accede al valor de "imagenQr"
          var imagenQr = apiResponse.imagenQr;

          // Puedes devolver el valor de "imagenQr" en la respuesta
          return Ok(imagenQr);
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


    [HttpPost("GenerarTokenYQr")]
    public async Task<IActionResult> GenerarTokenYQr([FromBody] qrclasegene requestData)
    {
      try
      {
        // Define los datos para obtener el token
        var tokenRequestData = new
        {
          username = "JUANAJ",
          password = "8033310JJvv"
        };

        // Convierte los datos en formato JSON para la solicitud del token
        var tokenJsonContent = JsonConvert.SerializeObject(tokenRequestData);
        var tokenStringContent = new StringContent(tokenJsonContent, Encoding.UTF8, "application/json");

        // Configura los encabezados de la solicitud para obtener el token
        _httpClient.DefaultRequestHeaders.Add("apikey", "5e1dc11b9a58a6930ad8d5466cf4e2b7bf7c3afe269d5d77");

        // Realiza la solicitud POST para obtener el token
        var tokenResponse = await _httpClient.PostAsync("autenticacion/v1/generarToken", tokenStringContent);

        // Verifica si la solicitud del token fue exitosa
        if (tokenResponse.IsSuccessStatusCode)
        {
          // Lee la respuesta como una cadena JSON
          var jsonResponse = await tokenResponse.Content.ReadAsStringAsync();

          // Deserializa la respuesta JSON en un objeto anónimo para extraer el valor del token
          var responseObject = JsonConvert.DeserializeObject<dynamic>(jsonResponse);
          string token = responseObject.objeto.token; // Aquí obtienes el valor del token

          // Configura los encabezados de la solicitud para el segundo POST (GenerarQr)
          _httpClient.DefaultRequestHeaders.Clear(); // Borra los encabezados anteriores
          _httpClient.DefaultRequestHeaders.Add("apikeyServicio", "ad3abc8fda3e938efbd6601dd0bd0e7883eeec4d27da85e1");
          _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);

          // Convierte los datos en formato JSON para el segundo POST (GenerarQr)
          var jsonContent = JsonConvert.SerializeObject(requestData);

          // Realiza la solicitud POST al servicio web (GenerarQr)
          var response = await _httpClient.PostAsJsonAsync("api/v1/generaQr", requestData);

          // Verifica si la solicitud del segundo POST fue exitosa
          if (response.IsSuccessStatusCode)
          {
            // Lee la respuesta como una cadena JSON
            var jsonResponse2 = await response.Content.ReadAsStringAsync();

            // Puedes procesar la respuesta aquí según tus necesidades
            return Ok(jsonResponse2);
          }
          else
          {
            // Maneja los errores de la solicitud del segundo POST
            return StatusCode((int)response.StatusCode, response.ReasonPhrase);
          }
        }
        else
        {
          // Maneja los errores de la solicitud del primer POST
          return StatusCode((int)tokenResponse.StatusCode, tokenResponse.ReasonPhrase);
        }
      }
      catch (Exception ex)
      {
        // Maneja las excepciones
        return StatusCode(500, ex.Message);
      }
    }

    [HttpPost("validacionQr")]
    public async Task<IActionResult> ValidacionQr([FromBody] ValidacionQrRequest requestData)
    {
      try
      {
        // Configura los encabezados de la solicitud
        _httpClient.DefaultRequestHeaders.Clear(); // Borra los encabezados anteriores
        _httpClient.DefaultRequestHeaders.Add("apikeyServicio", "ad3abc8fda3e938efbd6601dd0bd0e7883eeec4d27da85e1");
        _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "eyJhbGciOiJIUzUxMiJ9.eyJOb21icmUiOiJKVUFOQSBKVUxJQU5BIFZBU1FVRVogVklMTEFSUk9FTCIsInN1YiI6IkpVQU5BSiIsIlRpcG8iOiJFTVBSRVNBIiwiU3VidGlwbyI6bnVsbCwiSWRVc3VhcmlvIjoyOTMwNiwiT2JzZXJ2YWRvIjpmYWxzZSwiTWVudSI6W3sidGl0dWxvIjoiQWRtaW5pc3RyYWNpw7NuIiwib3JkZW4iOjEsImxpc3RhUGVybWlzbyI6W3siaWRQZXJtaXNvIjoxNSwibm9tYnJlIjoiVXN1YXJpb3MiLCJ2YWxvciI6Ii91c3VhcmlvcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfV19LHsidGl0dWxvIjoiVHJhbnNmZXJlbmNpYXMiLCJvcmRlbiI6MCwibGlzdGFQZXJtaXNvIjpbeyJpZFBlcm1pc28iOjE3LCJub21icmUiOiJUcmFuc2FjY2lvbmVzIiwidmFsb3IiOiIvdHJhbnNhY2Npb25lcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfSx7ImlkUGVybWlzbyI6MjMsIm5vbWJyZSI6IlJlcG9ydGVzIiwidmFsb3IiOiIvcmVwb3J0ZXMiLCJvcmRlbiI6MSwiX19oaWpvcyI6bnVsbH1dfSx7InRpdHVsbyI6IkVudGlkYWRlcyIsIm9yZGVuIjozLCJsaXN0YVBlcm1pc28iOlt7ImlkUGVybWlzbyI6MjEsIm5vbWJyZSI6IlNlcnZpY2lvcyIsInZhbG9yIjoiL3NlcnZpY2lvcyIsIm9yZGVuIjoxLCJfX2hpam9zIjpudWxsfSx7ImlkUGVybWlzbyI6OTcsIm5vbWJyZSI6IkVzdHJ1Y3R1cmEiLCJ2YWxvciI6Ii9lc3RydWN0dXJhIiwib3JkZW4iOjIsIl9faGlqb3MiOm51bGx9XX1dLCJleHAiOjE3MDI5NTE1NzgsImlhdCI6MTcwMjk0Nzk3OCwiRW50aWRhZCI6MTY5NTB9.zxCbClU7KI0as4Dk-SisHFg8FBIHlOiqEL-GYwS3Lg6EMOMTGkDSFG353kn6f4hCoGyE-wMx_kR7gJCDqmFiMw");

        // Convierte los datos en formato JSON (requestData) para el cuerpo de la solicitud
        var jsonContent = JsonConvert.SerializeObject(requestData);
        var stringContent = new StringContent(jsonContent, Encoding.UTF8, "application/json");

        // Realiza la solicitud POST al servicio web
        var response = await _httpClient.PostAsync("https://sip.mc4.com.bo:8443/api/v1/estadoTransaccion", stringContent);

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


    /*

    [HttpPost("validacionQryRespuesta")]
    public async Task<IActionResult> validacionQryRespuesta([FromBody] ValidacionQrRequest requestData)
    {
      try
      {
        // Define los datos para obtener el token
        var tokenRequestData = new
        {
          username = "JUANAJ",
          password = "8033310JJvv"
        };

        // Convierte los datos en formato JSON para la solicitud del token
        var tokenJsonContent = JsonConvert.SerializeObject(tokenRequestData);
        var tokenStringContent = new StringContent(tokenJsonContent, Encoding.UTF8, "application/json");

        // Configura los encabezados de la solicitud para obtener el token
        _httpClient.DefaultRequestHeaders.Add("apikey", "5e1dc11b9a58a6930ad8d5466cf4e2b7bf7c3afe269d5d77");

        // Realiza la solicitud POST para obtener el token
        var tokenResponse = await _httpClient.PostAsync("autenticacion/v1/generarToken", tokenStringContent);

        // Verifica si la solicitud del token fue exitosa
        if (tokenResponse.IsSuccessStatusCode)
        {
          // Lee la respuesta como una cadena JSON
          var jsonResponse = await tokenResponse.Content.ReadAsStringAsync();

          // Deserializa la respuesta JSON en un objeto anónimo para extraer el valor del token
          var responseObject = JsonConvert.DeserializeObject<dynamic>(jsonResponse);
          string token = responseObject.objeto.token; // Aquí obtienes el valor del token

          // Configura los encabezados de la solicitud para el segundo POST (GenerarQr)
          _httpClient.DefaultRequestHeaders.Clear(); // Borra los encabezados anteriores
          _httpClient.DefaultRequestHeaders.Add("apikeyServicio", "ad3abc8fda3e938efbd6601dd0bd0e7883eeec4d27da85e1");
          _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);

          // Convierte los datos en formato JSON para el segundo POST (GenerarQr)
          var jsonContent = JsonConvert.SerializeObject(requestData);

          // Realiza la solicitud POST al servicio web (GenerarQr)
          var response = await _httpClient.PostAsJsonAsync("api/v1/estadoTransaccion", requestData);

          // Verifica si la solicitud del segundo POST fue exitosa
          if (response.IsSuccessStatusCode)
          {
            // Lee la respuesta como una cadena JSON
            var jsonResponse2 = await response.Content.ReadAsStringAsync();

            // Puedes procesar la respuesta aquí según tus necesidades
            return Ok(jsonResponse2);
          }
          else
          {
            // Maneja los errores de la solicitud del segundo POST
            return StatusCode((int)response.StatusCode, response.ReasonPhrase);
          }
        }
        else
        {
          // Maneja los errores de la solicitud del primer POST
          return StatusCode((int)tokenResponse.StatusCode, tokenResponse.ReasonPhrase);
        }
      }
      catch (Exception ex)
      {
        // Maneja las excepciones
        return StatusCode(500, ex.Message);
      }
    }
    */

    /*
    [HttpPost("validacionQryRespuesta")]
    public async Task<IActionResult> validacionQryRespuesta([FromBody] ValidacionQrRequest requestData)
    {
      try
      {
        // Define los datos para obtener el token
        var tokenRequestData = new
        {
          username = "JUANAJ",
          password = "8033310JJvv"
        };

        // Convierte los datos en formato JSON para la solicitud del token
        var tokenJsonContent = JsonConvert.SerializeObject(tokenRequestData);
        var tokenStringContent = new StringContent(tokenJsonContent, Encoding.UTF8, "application/json");

        // Configura los encabezados de la solicitud para obtener el token
        _httpClient.DefaultRequestHeaders.Add("apikey", "5e1dc11b9a58a6930ad8d5466cf4e2b7bf7c3afe269d5d77");

        // Realiza la solicitud POST para obtener el token
        var tokenResponse = await _httpClient.PostAsync("autenticacion/v1/generarToken", tokenStringContent);

        // Verifica si la solicitud del token fue exitosa
        if (tokenResponse.IsSuccessStatusCode)
        {
          // Lee la respuesta como una cadena JSON
          var jsonResponse = await tokenResponse.Content.ReadAsStringAsync();

          // Deserializa la respuesta JSON en un objeto anónimo para extraer el valor del token
          var responseObject = JsonConvert.DeserializeObject<dynamic>(jsonResponse);
          string token = responseObject.objeto.token; // Aquí obtienes el valor del token

          // Configura los encabezados de la solicitud para el segundo POST (GenerarQr)
          _httpClient.DefaultRequestHeaders.Clear(); // Borra los encabezados anteriores
          _httpClient.DefaultRequestHeaders.Add("apikeyServicio", "ad3abc8fda3e938efbd6601dd0bd0e7883eeec4d27da85e1");
          _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {token}"); // Agrega el token al encabezado de autorización

          // Convierte los datos en formato JSON para el segundo POST (GenerarQr)
          var jsonContent = JsonConvert.SerializeObject(requestData);

          // Configura el encabezado "Content-Type" para la solicitud POST
          _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

          // Realiza la solicitud POST al servicio web (GenerarQr)
          var response = await _httpClient.PostAsJsonAsync("api/v1/estadoTransaccion", requestData);

          // Verifica si la solicitud del segundo POST fue exitosa
          if (response.IsSuccessStatusCode)
          {
            // Lee la respuesta como una cadena JSON
            var jsonResponse2 = await response.Content.ReadAsStringAsync();

            // Puedes procesar la respuesta aquí según tus necesidades
            return Ok(jsonResponse2);
          }
          else
          {
            // Maneja los errores de la solicitud del segundo POST
            return StatusCode((int)response.StatusCode, response.ReasonPhrase);
          }
        }
        else
        {
          // Maneja los errores de la solicitud del primer POST
          return StatusCode((int)tokenResponse.StatusCode, tokenResponse.ReasonPhrase);
        }
      }
      catch (Exception ex)
      {
        // Maneja las excepciones
        //return StatusCode(500, ex.Message);
        return StatusCode(500, new { message = ex.Message, stackTrace = ex.StackTrace });
      }
    }

    */
    [HttpPost("validacionQryRespuesta")]
    public async Task<IActionResult> validacionQryRespuesta([FromBody] ValidacionQrRequest requestData)
    {
      try
      {
        // Define los datos para obtener el token
        var tokenRequestData = new
        {
          username = "JUANAJ",
          password = "8033310JJvv"
        };

        // Convierte los datos en formato JSON para la solicitud del token
        var tokenJsonContent = JsonConvert.SerializeObject(tokenRequestData);
        var tokenStringContent = new StringContent(tokenJsonContent, Encoding.UTF8, "application/json");

        // Configura los encabezados de la solicitud para obtener el token
        _httpClient.DefaultRequestHeaders.Add("apikey", "5e1dc11b9a58a6930ad8d5466cf4e2b7bf7c3afe269d5d77");

        // Realiza la solicitud POST para obtener el token
        var tokenResponse = await _httpClient.PostAsync("autenticacion/v1/generarToken", tokenStringContent);

        // Verifica si la solicitud del token fue exitosa
        if (tokenResponse.IsSuccessStatusCode)
        {
          // Lee la respuesta como una cadena JSON
          var jsonResponse = await tokenResponse.Content.ReadAsStringAsync();

          // Deserializa la respuesta JSON en un objeto anónimo para extraer el valor del token
          var responseObject = JsonConvert.DeserializeObject<dynamic>(jsonResponse);
          string token = responseObject.objeto.token; // Aquí obtienes el valor del token

          // Configura los encabezados de la solicitud para el segundo POST (GenerarQr)
          _httpClient.DefaultRequestHeaders.Clear(); // Borra los encabezados anteriores
          _httpClient.DefaultRequestHeaders.Add("apikeyServicio", "ad3abc8fda3e938efbd6601dd0bd0e7883eeec4d27da85e1");
          _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {token}"); // Agrega el token al encabezado de autorización

          // Convierte los datos en formato JSON para el segundo POST (GenerarQr)
          var jsonContent = JsonConvert.SerializeObject(requestData);

          // Configura el encabezado "Content-Type" para la solicitud POST
          _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

          // Realiza la solicitud POST al servicio web (GenerarQr)
          var response = await _httpClient.PostAsJsonAsync("api/v1/estadoTransaccion", requestData);

          // Verifica si la solicitud del segundo POST fue exitosa
          if (response.IsSuccessStatusCode)
          {
            // Lee la respuesta como una cadena JSON
            var jsonResponse2 = await response.Content.ReadAsStringAsync();

            // Deserializa la respuesta JSON en un objeto dinámico
            dynamic responseObject2 = JsonConvert.DeserializeObject<dynamic>(jsonResponse2);

            // Extrae el estadoActual del objeto
            string estadoActual = responseObject2.objeto.estadoActual;

            // Devuelve únicamente el estadoActual
            return Ok(new { estadoActual = estadoActual });
          }
          else
          {
            // Maneja los errores de la solicitud del segundo POST
            return StatusCode((int)response.StatusCode, response.ReasonPhrase);
          }
        }
        else
        {
          // Maneja los errores de la solicitud del primer POST
          return StatusCode((int)tokenResponse.StatusCode, tokenResponse.ReasonPhrase);
        }
      }
      catch (Exception ex)
      {
        // Maneja las excepciones
        return StatusCode(500, new { message = ex.Message, stackTrace = ex.StackTrace });
      }
    }


  }
}
