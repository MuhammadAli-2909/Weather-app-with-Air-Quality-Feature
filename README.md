# WEATHI.IO — Weather Forecast App

A simple weather app where you can search for any city and instantly view its current weather and air quality in a clean, dark dashboard-style interface.

## 🌐 Live Demo

[🚀 Launch WEATHI.IO](https://weather-app-five-swart-71.vercel.app/)

## ✨ Features

- Search weather by city name
- Current temperature displayed in both °C and °F
- Weather condition with matching icon
- Wind speed, humidity, and cloud cover
- Air quality displayed as a percentage (converted from the US EPA index)
- Last updated timestamp
- Proper error handling for empty searches and invalid city names

## 🛠 Built With

- HTML
- CSS
- JavaScript (Vanilla)
- [WeatherAPI.com](https://www.weatherapi.com/) for weather and air quality data
- Google Fonts (Orbitron & Poppins)

## ⚙️ How It Works

When a city is searched, the application sends two requests to WeatherAPI simultaneously using `Promise.all()`:

- Current weather data
- Forecast data with air quality information

The returned US EPA air quality index (1–6) is converted into a simple percentage for easier understanding. All UI elements are created and updated using plain JavaScript DOM manipulation without any frameworks or templating libraries.

## 🚀 Running Locally

1. Clone the repository.
2. Get a free API key from [WeatherAPI.com](https://www.weatherapi.com/).
3. Replace the values of `api1` and `api2` in `script.js` with your own API key.
4. Open `index.html` in your browser.

## 🔐 API Key

This project is built entirely on the frontend, so the API key is visible in the JavaScript source. This is a limitation of client-side applications. In a production environment, the API key should be protected behind a backend or serverless function.

## 📸 Screenshots

<img width="1366" height="650" alt="Home Screen" src="https://github.com/user-attachments/assets/2affedb8-c67a-43c7-bc21-c353dce7f041" />


<img width="1363" height="653" alt="Weather Details" src="https://github.com/user-attachments/assets/d35e3776-e5a2-404f-bc8e-75b32e560158" />

<img width="1349" height="648" alt="Air Quality View" src="https://github.com/user-attachments/assets/e69770b5-ecd7-449d-9261-0453a07efed7" />
<img width="537" height="308" alt="Search Result" src="https://github.com/user-attachments/assets/bc498b64-756f-47a0-adb0-ac1f1476bcaa" />

## 🎥 Demo

▶️ **Watch the demo video:**

https://github.com/user-attachments/assets/28a7aae1-5b1a-4472-b67c-a1c2825959d3


