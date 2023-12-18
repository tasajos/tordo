using backend_Tordo.Models;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Cors

builder.Services.AddCors(options => options.AddPolicy("AllowWebapp", builder =>
builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));



//add context
builder.Services.AddDbContext<TordoContext>(options =>
{

  options.UseSqlServer(builder.Configuration.GetConnectionString("Conexion"));


});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}


app.UseCors("AllowWebapp");

app.UseHttpsRedirection();

//app.UseHttpsRedirection();

<<<<<<< HEAD
=======

>>>>>>> 1c80b604f6cca9fdff6a076fdc8b0800b2b6e4a4
app.UseAuthorization();

app.MapControllers();

app.Run();

<<<<<<< HEAD

=======
>>>>>>> 1c80b604f6cca9fdff6a076fdc8b0800b2b6e4a4
/*Para produccion comentar run, comentar app.UseHttpsRedirction y descomentar el segmento de ip*/

//app.Run();

//app.Run("http://0.0.0.0:5201");
