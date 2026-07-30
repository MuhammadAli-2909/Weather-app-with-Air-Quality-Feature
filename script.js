let div = document.createElement('div');
let form = document.getElementById("form");
form.after(div);
async function weather(city) {

    const api1 = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    const api2 = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=yes`;
    let [weatherRes, forecastRes] = await Promise.all([
        fetch(api1),
        fetch(api2)
    ]);

    let fetchW = await weatherRes.json();
    let fetchF = await forecastRes.json();

    return {
        weather: fetchW,
        forecast: fetchF
    };
}

async function main(e) {
    e.preventDefault();
    let city = document.getElementById("search").value.trim();
    let container = document.getElementById("container");
    container.innerHTML = "";
    div.innerHTML = "";
    if (city === "") {
        div.innerHTML = "<div class='err'>Please enter a city name</div>";
        return;
    }
    let data = await weather(city);
    if (data.weather.error) {
        let notfound = document.createElement("div");
        notfound.setAttribute('class', 'notfound')
        notfound.innerHTML = `<p>${data.weather.error.message}</p>`;
        container.append(notfound);
    }
    else {
        let result = document.createElement('div');
        result.setAttribute('id', 'result');
        container.appendChild(result);
        let epa = data.forecast.forecast.forecastday[0].day.air_quality["us-epa-index"];
        let quality = ((6 - epa) / 5) * 100;
        result.innerHTML = `<p><b>LOCATION:</b> ${data.weather.location.name}, ${data.weather.location.region}, ${data.weather.location.country}</p>
            <p><b>LOCALTIME:</b> ${data.weather.location.localtime}</p>
            <div class="content">
                <div class="temp">
                    <img src="${data.weather.current.condition.icon}" alt="Condition">
                    <div class="temperature">
                        <div class="c">${data.weather.current.temp_c}<sup>∘</sup>C</div>
                        <div class="f">${data.weather.current.temp_f}<sup>∘</sup>F</div>
                    </div>
                </div>
                <div class="detail">
                    <div class="top">
                        <p>CURRENT CONDITION:</p>
                        <div>${data.weather.current.condition.text}</div>
                    </div>
                    <div class="bottom">
                        <div class="line"><img src="wind.svg" width="15" alt="">WIND: ${data.weather.current.wind_kph} kph</div>
                        <div class="line"><img src="humidity.svg" width="15" alt="">HUMIDITY: ${data.weather.current.humidity}%</div>
                        <div class="line"><img src="cloud.svg" width="15" alt="">CLOUD: ${data.weather.current.cloud}%</div>
                        <div class="line"><img src="quality.svg" width="15" alt="">AIR QUALITY: ${quality}%</div>
                        <hr>
                        <div class="time">LAST UPDATED: <br><span>${data.weather.current.last_updated}</span></div>
                    </div>
                </div>
            </div>`
    }
}
form.addEventListener("submit", main);