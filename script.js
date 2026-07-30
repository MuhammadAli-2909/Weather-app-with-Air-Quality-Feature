const form = document.getElementById("form");
const container = document.getElementById("container");

const message = document.createElement("div");
form.after(message);

async function weather(city) {

    const api1 = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    const api2 = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=yes`;

    try {

        const [weatherRes, forecastRes] = await Promise.all([
            fetch(api1),
            fetch(api2)
        ]);

        if (!weatherRes.ok || !forecastRes.ok) {
            throw new Error("Unable to connect to Weather API.");
        }

        const weatherData = await weatherRes.json();
        const forecastData = await forecastRes.json();

        return {
            weather: weatherData,
            forecast: forecastData
        };

    } catch (err) {

        return {
            error: true,
            message: err.message
        };

    }

}

async function main(e) {

    e.preventDefault();

    const city = document.getElementById("search").value.trim();

    message.innerHTML = "";
    container.innerHTML = "";

    if (city === "") {
        message.innerHTML = `<div class="err">Please enter a city name.</div>`;
        return;
    }

    const btn = document.querySelector(".butt");

    btn.disabled = true;

    btn.innerHTML = "Loading...";

    container.innerHTML = `
        <div class="loader"></div>
    `;

    try {

        const data = await weather(city);

        container.innerHTML = "";

        if (data.error) {

            container.innerHTML = `
                <div class="notfound">
                    <h2>⚠ Unable to fetch weather data.</h2>
                    <p>Please check your internet connection and try again.</p>
                </div>
            `;

            return;

        }

        if (data.weather.error) {

            container.innerHTML = `
                <div class="notfound">
                    <h2>❌ City Not Found</h2>
                    <p>${data.weather.error.message}</p>
                </div>
            `;

            return;

        }

        const result = document.createElement("div");

        result.id = "result";

        container.appendChild(result);

        const epa = data.forecast.forecast.forecastday[0].day.air_quality["us-epa-index"];

        const quality = Math.round(((6 - epa) / 5) * 100);

        result.innerHTML = `

<p><b>LOCATION:</b> ${data.weather.location.name},
${data.weather.location.region},
${data.weather.location.country}</p>

<p><b>LOCAL TIME:</b> ${data.weather.location.localtime}</p>

<div class="content">

<div class="temp">

<img src="https:${data.weather.current.condition.icon}" alt="Weather Icon">

<div class="temperature">

<div class="c">
${data.weather.current.temp_c}<sup>°</sup>C
</div>

<div class="f">
${data.weather.current.temp_f}<sup>°</sup>F
</div>

</div>

</div>

<div class="detail">

<div class="top">

<p>CURRENT CONDITION</p>

<div>
${data.weather.current.condition.text}
</div>

</div>

<div class="bottom">

<div class="line">
<img src="wind.svg" width="15">
Wind: ${data.weather.current.wind_kph} km/h
</div>

<div class="line">
<img src="humidity.svg" width="15">
Humidity: ${data.weather.current.humidity}%
</div>

<div class="line">
<img src="cloud.svg" width="15">
Cloud: ${data.weather.current.cloud}%
</div>

<div class="line">
<img src="quality.svg" width="15">
Air Quality: ${quality}%
</div>

<hr>

<div class="time">

LAST UPDATED

<br>

<span>

${data.weather.current.last_updated}

</span>

</div>

</div>

</div>

</div>

`;

    } catch (err) {

        container.innerHTML = `
            <div class="notfound">
                <h2>⚠ Something went wrong.</h2>
                <p>${err.message}</p>
            </div>
        `;

    } finally {

        btn.disabled = false;

        btn.innerHTML = `
            Search
            <img src="search.svg" width="20" alt="">
        `;

    }

}

form.addEventListener("submit", main);