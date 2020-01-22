using Microsoft.ML;
using Start_Micro_Weather_Prediction_Service.Abstractions;
using Start_Micro_Weather_Prediction_Service.Models;
using System;

namespace Start_Micro_Weather_Prediction_Service
{
    public class PredictionService : IPredictionService
    {
        private readonly PredictionEngine<ModelInput, ModelOutput> _predictionEngine;
        public PredictionService()
        {
            MLContext mlContext = new MLContext();

            string modelPath = AppDomain.CurrentDomain.BaseDirectory + "MLModel.zip";
            ITransformer mlModel = mlContext.Model.Load(modelPath, out var modelInputSchema);
            _predictionEngine = mlContext.Model.CreatePredictionEngine<ModelInput, ModelOutput>(mlModel);
        }
        public ModelOutput Predict(ModelInput input)
        {
            return _predictionEngine.Predict(input);
        }
    }
}
