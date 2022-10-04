using APIappentrega.Data;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var serverVersion = new MySqlServerVersion(new Version(8, 0, 29));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<EntregaContext>(opts => opts.UseMySql(builder.Configuration.GetConnectionString("db_appentrega"), serverVersion));
builder.Services.AddCors();
    

var app = builder.Build();
app.UseCors(
       options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
   );
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
