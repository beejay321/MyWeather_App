// import { Col, Button, Form, FormControl, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Location, Current, Forecast, Hour } from "../types/interface";
import Home from "./Home";
import "../styles/styles.css";
import MyNav from "./MyNav";

const Search = () => {
  const [query, setQuery] = useState<string>("Hamburg");
  const [location, setLocation] = useState<Location>({ country: "", name: "", localtime: "", localtime_epoch: 0 });
  const [current, setCurrent] = useState<Current>({
    temp_c: 0,
    temp_f: 0,
    humidity: 0,
    wind_kph: 0,
    vis_km: 0,
    pressure_mb: 0,
    pressure_in: 0,
    uv: 0,
    condition: {
      text: "",
      icon: "",
    },
  });
  const [hour, setHour] = useState<Hour[]>([
    {
      temp_c: 0,
      temp_f: 0,
      time: "",
      time_epoch: 0,
      condition: {
        text: "",
        icon: "",
      },
    },
  ]);
  const [forecast, setForecast] = useState<Forecast>({
    forecastday: [],
  });
  const ApiKey = "4b51c3cbe7a84df6b2d202827222708";
  // const ApiKey = "fbe4e438757ef73f55428964ef949aad";
  // const ApiKey = process.env.ApiKey;


  useEffect(() => {
    const getWeather = async () => {
      try {
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${query}&days=1&aqi=no&alerts=no`);

        if (response.ok) {
          let result = await response.json();
          console.log(result);
          setLocation(result.location);
          setCurrent(result.current);
          setForecast(result.forecast);
          setHour(result.forecast.forecastday[0].hour);
        }
      } catch (error) {
        console.log("This is the error", error);
      }
    };
    getWeather();
  }, []);

  return (
    <>
      <div className="home ">
        <MyNav ccurrent={current} location={location} />
        <Home ccurrent={current} location={location} forecast={forecast} hour={hour} />
      </div>
    </>
  );
};

export default Search;
