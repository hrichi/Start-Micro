using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Start_Micro_Weather_Prediction_Service.Abstractions;
using Start_Micro_Weather_Prediction_Service.Models;

namespace Start_Micro_Weather_Prediction_Service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherPredictionController : ControllerBase
    {
        private readonly ILogger<WeatherPredictionController> _logger;
        private readonly IPredictionService _predictionService;

        public WeatherPredictionController(ILogger<WeatherPredictionController> logger, IPredictionService predictionService)
        {
            _logger = logger;
            _predictionService = predictionService;
        }

        [HttpPost]
        public string Post(IFormFile file)
        {
            var fileName = Path.GetFileName(file.FileName);

            // If file with same name exists delete it
            if (System.IO.File.Exists(fileName))
            {
                System.IO.File.Delete(fileName);
            }

            // Create new local file and copy contents of uploaded file
            using (var localFile = System.IO.File.OpenWrite(fileName))
            using (var uploadedFile = file.OpenReadStream())
            {
                uploadedFile.CopyTo(localFile);
            }

            var predicationInput = new ModelInput
            {
                ImageSource = fileName
            };

            // Predict the weather from File
            var result = _predictionService.Predict(predicationInput);

            // Delete file after prediction
            if (System.IO.File.Exists(fileName))
            {
                System.IO.File.Delete(fileName);
            }

            return result.Prediction;
        }
    }
}
