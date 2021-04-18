using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace dotnet_react_calendar.Models.HereApi
{
    public class Astronomy
    {
        [JsonPropertyName("astronomy")]
        public AstronomyForecase AstronomyForecast { get; set; }

        public Astronomy()
        {
            AstronomyForecast = new AstronomyForecase();
        }
    }

    public class AstronomyForecase
    {
        [JsonPropertyName("astronomy")]
        public List<AstronomyItem> AstronomyItems { get; set; }

        public AstronomyForecase()
        {
            AstronomyItems = new List<AstronomyItem>();
        }
    }

    public class AstronomyItem
    {
        [JsonPropertyName("sunrise")]
        public string Sunrise { get; set; }

        [JsonPropertyName("sunset")]
        public string Sunset { get; set; }

        [JsonPropertyName("moonrise")]
        public string Moonrise { get; set; }

        [JsonPropertyName("moonset")]
        public string Moonset { get; set; }

        [JsonPropertyName("moonPhase")]
        public decimal MoonPhase { get; set; }

        [JsonPropertyName("moonPhaseDesc")]
        public string MoonPhaseDesc { get; set; }

        [JsonPropertyName("iconName")]
        public string IconName { get; set; }

        [JsonPropertyName("city")]
        public string City { get; set; }

        [JsonPropertyName("latitude")]
        public decimal Latitude { get; set; }

        [JsonPropertyName("longitude")]
        public decimal Longitude { get; set; }

        [JsonPropertyName("utcTime")]
        public DateTime UtcTime { get; set; }
    }
}
