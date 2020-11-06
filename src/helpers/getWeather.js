export const getWeather = async (city)=>{
  const API_KEY = process.env.REACT_APP_OP_APIKEY;    // obtenemos la api key desde la variable de ambiente
  const URL_BASE = "https://api.openweathermap.org/data/2.5";
  const LANG = "es";
  const UNITS = "metric";
  const url = `${URL_BASE}/weather?appid=${API_KEY}&lang=${LANG}&units=${UNITS}&q=${encodeURI(city)}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    weather: data.weather[0].description,
    weather_icon : data.weather[0].icon,
    temp : data.main.temp,
    temp_min : data.main.temp_min,
    temp_max : data.main.temp_max,
    pressure : data.main.pressure,
    humidity : data.main.humidity
  }
}