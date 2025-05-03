function getvalue(){
  const api = '2804c897d8a04885833134230250305';
  const textbox = document.getElementById("fname");
  var city = textbox.value;

  const link = 'https://api.weatherapi.com/v1/current.json?key=' + api + '&q=' + city + '&aqi=yes';

  fetch(link)
    .then(response => response.json())
    .then(data => {
      // Clear and set content
      document.getElementById("location").textContent = data.location.name;
      document.getElementById("temperature").textContent = data.current.temp_c + "°C";
      document.getElementById("condition_text").textContent = data.current.condition.text;

      const imageContainer = document.getElementById("image");

      // Clear previous image if any
      imageContainer.innerHTML = "";
      
      // Create and append new image
      const img = document.createElement("img");
      img.src = "https:" + data.current.condition.icon;
      img.alt = data.current.condition.text;
      img.width = 80; // Optional size control
      img.height = 80;
      imageContainer.appendChild(img);
      

      document.getElementById("humidity").textContent = "Humidity: " + data.current.humidity + "%";
      document.getElementById("wind").textContent = "Wind: " + data.current.wind_kph + " km/h";
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });

}
