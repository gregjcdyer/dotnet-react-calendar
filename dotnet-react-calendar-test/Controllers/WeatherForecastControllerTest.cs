using dotnet_react_calendar.Controllers;
using Microsoft.Extensions.Logging;
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

            var controller = new WeatherForecastController(logger);

            var result = controller.Get();

            Assert.AreEqual(5, result.Count());
        }
    }
}
