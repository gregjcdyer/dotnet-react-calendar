using dotnet_react_calendar.Models.HereApi;
using dotnet_react_calendar.Settings;
using Microsoft.Extensions.Options;
using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace dotnet_react_calendar.Services
{
    public class HereApiService
    {
        private readonly HttpClient _httpClient;
        private readonly string _apiKey;
        private enum ForecastProducts
        {
            forecast_astronomy,
            forecast_hourly
        }


        public HereApiService(HttpClient httpClient, IOptions<HereApiSettings> settings)
        {
            _httpClient = httpClient;
            _httpClient.BaseAddress = new Uri(settings.Value.BaseUrl);
            _apiKey = settings.Value.ApiKey;
        }

        public async Task<Astronomy> GetAstronomy(string location)
        {
            var resp = await _httpClient.GetAsync($"report.json?product={nameof(ForecastProducts.forecast_astronomy)}&name={location}&apiKey={_apiKey}");

            if (resp.IsSuccessStatusCode)
            {
                var json = await resp.Content.ReadAsStringAsync();

                var astro = JsonSerializer.Deserialize<Astronomy>(json);

                return astro;
            }

            return new Astronomy();
        }
    }
}
