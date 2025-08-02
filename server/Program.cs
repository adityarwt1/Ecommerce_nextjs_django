using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();  // Keep CORS and Swagger if needed
builder.Services.AddCors(opts => {
    var o = builder.Configuration["ALLOWED_ORIGIN"] ?? "http://localhost:3000";
    opts.AddPolicy("AllowFromEnv", p => p.WithOrigins(o)
                                          .AllowAnyHeader()
                                          .AllowAnyMethod());
});
builder.Services.AddOpenApi();

var app = builder.Build();

app.UseCors("AllowFromEnv");

if (app.Environment.IsDevelopment()) {
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// ************************************************************
//  Middleware to enable buffering for later raw body reading
// ************************************************************
app.Use(async (ctx, next) =>
{
    ctx.Request.EnableBuffering(); // Must go before any reader
    await next();
});

// ********************************************
// GET endpoints you already have
// ********************************************
app.MapGet("/weatherforecast", () => {
    var summaries = new[] { "Freezing", "Bracing", "Mild", "Hot", "Scorching" };
    var forecast = Enumerable.Range(1, 5).Select(i =>
       new WeatherForecast(DateOnly.FromDateTime(DateTime.Now.AddDays(i)),
                           Random.Shared.Next(-20, 55),
                           summaries[Random.Shared.Next(summaries.Length)])
    ).ToArray();
    return forecast;
}).WithName("GetWeatherForecast");

app.MapGet("/", () => Results.Ok(new { message = "Helloo" }));

// ********************************************
// NEW: A POST endpoint that reads raw body
// ********************************************
app.MapPost("/echo", async (HttpContext ctx) =>
{
    // 1. Reset position to ensure we read from start
    ctx.Request.Body.Position = 0;

    using var reader = new StreamReader(
        ctx.Request.Body,
        Encoding.UTF8,
        leaveOpen: true);

    string rawText = await reader.ReadToEndAsync();

    // 2. Rewind so default binders, if used later, still see the body
    ctx.Request.Body.Position = 0;

    // 3. Parse JSON into DTO if Content-Type is JSON
    object? parsed = null;
    if (ctx.Request.ContentType?.Contains("json", StringComparison.OrdinalIgnoreCase) == true)
    {
        try {
            parsed = JsonSerializer.Deserialize<MyDto>(rawText,
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
        }
        catch {
            parsed = null;
        }
    }

    // 4. Return both raw and parsed
    return Results.Json(new { raw = rawText, dto = parsed });
});

app.Run();

// DTO to represent expected JSON structure
record MyDto(string? Name, int Age);

// Your WeatherForecast record
record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
