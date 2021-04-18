using dotnet_react_calendar.Controllers;
using dotnet_react_calendar.Services;
using dotnet_react_calendar.Settings;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Linq;

namespace dotnet_react_calendar_test
{
    [TestClass]
    public class WeatherForecastControllerTest
    {
        [TestMethod]
        public void ControllerReturnsCorrectNumberOfItems()
        {
            var mock = new Mock<ILogger<WeatherForecastController>>();

            ILogger<WeatherForecastController> logger = mock.Object;
            var options = Options.Create(new HereApiSettings {BaseUrl="http://validurl.com" });

            var service = new HereApiService(new System.Net.Http.HttpClient(), options);

            var controller = new WeatherForecastController(logger, service);

            var result = controller.Get();

            Assert.AreEqual(5, result.Count());
        }
    }
}
