using Grpc.Core;
using Microsoft.Extensions.Options;
using Start_Micro_Grpc_Services.Infrastructure;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System;

namespace Start_Micro_Grpc_Services.Services
{
    public class WeatherService : Weather.WeatherBase
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly AppSettings _settings;

        public WeatherService(IHttpClientFactory httpClientFactory, IOptions<AppSettings> options)
        {
            _httpClientFactory = httpClientFactory;
            _settings = options.Value;
        }

        public override async Task<ForecastResponse> GetForecast(ForecastRequest request, ServerCallContext context)
        {
            try
            {
                var client = _httpClientFactory.CreateClient(HttpClients.StartMicroApi);
                var result = await client.GetStringAsync(API.WeatherService.GetForecast(_settings.WeatherServiceApiUrl, request.CityName));

                var forecast = JsonConvert.DeserializeObject<ForecastResponse>(result);
                return forecast;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Console.WriteLine(ex.StackTrace);
                throw ;
            }
           
        }
    }
}
