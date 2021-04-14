import './style.css';

const host = 'https://weather-proxy.rainbowstack.workers.dev/';

const template = ({ applicable_date, weather_state_name, weather_state_abbr }) => `
    <li class="text-2xl text-gray-800 flex flex-row md:flex-col items-center justify-center gap-3">
        <h2 class="">${new Date(applicable_date).toUTCString().substring(0, 12)}</h2>
        <span class="flex md:flex-col-reverse items-center gap-3">
            <p >${weather_state_name}</p>
            <img 
                class="w-8 h-8 md:w-12 md:h-12"
                height="48"
                width="48"
                src="${host}/static/img/weather/${weather_state_abbr}.svg" 
                alt="${weather_state_name ? `icon of ${weather_state_name}` : 'weather icon'}">
        </span>
    </li>`;

const forecastEl = document.getElementById('forecast');

(async () => {
    try {
        const { consolidated_weather } = await (await fetch(`${host}api/location/44544/`)).json()
        consolidated_weather.slice(1).forEach((w) => forecastEl.insertAdjacentHTML('beforeend', template(w)))
    } catch (error) {
        console.warn(error)
    }
})();


