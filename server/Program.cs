var builder = WebApplication.CreateBuilder(args);

// Get the origin from environment variable
var allowedOrigin = builder.Configuration["ALLOWED_ORIGIN"] ?? "http://localhost:3000";

// Enable CORS services
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFromEnv", policy =>
    {
        policy.WithOrigins(allowedOrigin)
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Optional: Add Swagger if you're using it
builder.Services.AddOpenApi();

var app = builder.Build();

// Use CORS middleware
app.UseCors("AllowFromEnv");

// Swagger UI in development
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// Endpoints
app.MapGet("/weatherforecast", () =>
{
    var summaries = new[] { "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching" };
    var forecast = Enumerable.Range(1, 5).Select(index =>
         new WeatherForecast
         (
             DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
             Random.Shared.Next(-20, 55),
             summaries[Random.Shared.Next(summaries.Length)]
         )).ToArray();

    return forecast;
}).WithName("GetWeatherForecast");

app.MapGet("/", () =>
{
    return Results.Ok(new { message = "Helloo" });
});

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
