using Grpc.Core;
using System;
using System.Threading.Tasks;

namespace Start_Micro_Grpc_Services.Services
{
    public class WeatherService : Weather.WeatherBase
    {
        private static Random random = new Random();
        private static string[] Cities = new string[] { "New York", "London", "Paris" };

        public override Task<ForecastResponse> GetForecast(ForecastRequest request, ServerCallContext context)
        {
            return Task.FromResult(new ForecastResponse
            {
                CityName = request.CityName,
                Temp = random.Next(-30, 50)
            }); ;
        }

        public override Task<ForecastsResponse> GetForecasts(Empty request, ServerCallContext context)
        {
            var response = new ForecastsResponse();

            foreach (var city in Cities)
            {
                response.Forecasts.Add(new ForecastResponse
                {
                    CityName = city,
                    Temp = random.Next(-30, 50)
                });
            }

            return Task.FromResult(response);
        }
    }
}
