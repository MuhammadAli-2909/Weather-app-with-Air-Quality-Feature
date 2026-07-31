# WEATHI.IO — Weather Forecast App

A weather app where you search any city and get current weather + air quality on a dark dashboard-style UI.

## 🌐 Live Demo

[Launch WEATHI.IO](https://weather-app-five-swart-71.vercel.app/)

## ✨ Features

- Search by city name
- Temperature in both °C and °F
- Weather condition with matching icon
- Wind speed, humidity, cloud cover
- Air quality as a percentage (converted from the US EPA index)
- Last updated timestamp
- Handles empty searches and invalid city names gracefully

## 🛠 Built With

- HTML, CSS, JavaScript (Vanilla)
- [WeatherAPI.com](https://www.weatherapi.com/) for weather and air quality data
- Google Fonts (Orbitron & Poppins)

## ⚙️ How It Works

When you search a city, the app fires two requests to WeatherAPI at once using `Promise.all()`: current weather, and forecast data with air quality.

The US EPA air quality index (1–6) gets converted into a percentage so it's easier to read at a glance. No frameworks, no templating — just plain JS DOM manipulation for building and updating the UI.

## 🚀 Running Locally

1. Clone the repo.
2. Grab a free API key from [WeatherAPI.com](https://www.weatherapi.com/).
3. Swap in your key for `api1` and `api2` in `script.js`.
4. Open `index.html` in your browser.

## 🔐 API Key

This is a frontend-only project, so the API key sits right there in the JS source. That's just how client-side apps work — for production you'd want it behind a backend or serverless function instead.

## 📸 Screenshots

<img width="1366" height="653" alt="image" src="https://github.com/user-attachments/assets/73a73f9e-b41f-4858-b889-50fab1fb9136" />
<img width="1366" height="649" alt="image" src="https://github.com/user-attachments/assets/ec00d0d2-7f23-4e4b-b7c7-8c006bf4d5aa" />
<img width="1361" height="646" alt="image" src="https://github.com/user-attachments/assets/88d60035-92d4-47ad-9ec6-b2373c1ca741" />
<img width="1359" height="647" alt="image" src="https://github.com/user-attachments/assets/970f61d7-be3c-4ea5-b17d-1e610fc4c7fa" />
<img width="1350" height="647" alt="image" src="https://github.com/user-attachments/assets/95dabb3c-f104-4359-bd89-eba630ab8596" />

## 🎥 Demo

▶️ Watch the demo video:
https://github.com/user-attachments/assets/7373da6d-5b84-4e8f-88a0-a00edb00c141
