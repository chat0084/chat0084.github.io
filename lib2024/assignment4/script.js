function calculateTemperature() {
   function celsiusToFahrenheit(celsius) {
      var fahrenheit = Math.round((celsius * (9/5)) + 32);
      return fahrenheit;
   }

   function fahrenheitToCelsius(fahrenheit) {
      var celsius = Math.round((fahrenheit - 32) * (5/9));
      return celsius;
   }

   // Checks if Calsius (1) or Fahrenheit (2) is selected put into unitSelected
   var unitElement = document.getElementById("unitSelection");
   var unitSelected = unitElement.options[unitElement.selectedIndex].value;

   // Checks the value inside the Temperature input
   var temperature = document.getElementById("temperatureInput").value;

   var result;
   var unit;
   
   if (unitSelected == 1) {
      result = celsiusToFahrenheit(temperature);
      newUnit = "°Fahrenheit";
   } else {
      result = fahrenheitToCelsius(temperature);
      newUnit = "°Celsius"
   }
   document.getElementById("resultContainer").innerHTML = "= " + result + newUnit;

}