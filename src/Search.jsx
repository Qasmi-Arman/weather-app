import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Search.css";
import { useState } from "react";

let url = "https://api.openweathermap.org/data/2.5/weather";
let api = "6e6e5d8105ae6551a5f2a3ee4677f05e";

export default function Search({updateInfo}) {
  let [city, setCity] = useState("");

  let getWeatherInfo = async () => {
    let response = await fetch(`${url}?q=${city}&appid=${api}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      city:`${city.toUpperCase()}`,
      temp: jsonResponse.main.temp,
      temp_min: jsonResponse.main.temp_min,
      temp_max: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feels_like: jsonResponse.main.feels_like,
    };
    console.log(result);
    return result;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
   let newInfo = await  getWeatherInfo();
   updateInfo(newInfo);
  };

  return (
    <div>
       <h1><b>Weather Information</b></h1>
      <form className="search-section" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained">
          Contained
        </Button>
      </form>
    </div>
  );
}
