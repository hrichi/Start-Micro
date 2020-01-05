namespace Start_Micro_Grpc_Services.Infrastructure
{
    public static class API
    {
        public static class WeatherService
        {
            public static string GetForecast(string baseUri, string city) => $"{baseUri}/{city}";
        }

        public static class WeatherImageService
        {
        }
    }
}