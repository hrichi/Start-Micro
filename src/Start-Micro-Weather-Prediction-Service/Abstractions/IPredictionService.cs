
using Start_Micro_Weather_Prediction_Service.Models;

namespace Start_Micro_Weather_Prediction_Service.Abstractions
{
    public interface IPredictionService
    {
        ModelOutput Predict(ModelInput input);
    }
}
