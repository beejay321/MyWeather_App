import { Col, Button, Form, FormControl, Container, Row } from "react-bootstrap";
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

  // const getWeather = async (query: string) => {
  //   try {
  //     let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${ApiKey}`);
  //     if (response.ok) {
  //       let result = await response.json();
  //       console.log(result);
  //       setCity(result);

  //       if (result) {
  //         try {
  //           let NewResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result!.coord.lat}&lon=${result!.coord.lon}&units=metric&exclude=minutely&appid=${ApiKey}`);

  //           let data = await NewResponse.json();
  //           console.log(data);
  //           setCurrent(data);
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     console.log("This is the error", error);
  //   }
  // };
  // https://api.openweathermap.org/data/2.5/weather?q=Hamburg&appid=29f89c36ba2b5cddcb3735b724701235

  useEffect(() => {
    const getWeather = async () => {
      try {
        // let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${ApiKey}`);

        // let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${query}`);

        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${query}&days=1&aqi=no&alerts=no`);

        if (response.ok) {
          let result = await response.json();
          console.log(result);
          setLocation(result.location);
          setCurrent(result.current);
          setForecast(result.forecast);
          setHour(result.forecast.forecastday[0].hour);

          // if (result) {
          //   try {
          //     let NewResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result!.coord.lat}&lon=${result!.coord.lon}&units=metric&exclude=minutely&appid=${ApiKey}`);

          //     let data = await NewResponse.json();
          //     console.log(data);
          //     setCurrent(data);
          //   } catch (error) {
          //     console.log(error);
          //   }
          // }
        }
      } catch (error) {
        console.log("This is the error", error);
      }
    };
    getWeather();
    // }, [city, current, query, ApiKey]);
  }, []);

  return (
    <>
      <div className="home ">
        <MyNav ccurrent={current} location={location} />
        <div>
          <Home ccurrent={current} location={location} forecast={forecast} hour={hour} />
        </div>
      </div>
      {/* <div>
        <Container>
          <Row className="d-flex justify-content-center py-4">
            <Col sm={12} md={8} lg={4}>
              <Form className="d-flex justify-content-center">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" value={query} onChange={(e) => setQuery(e.currentTarget.value.toLowerCase())} />
                <Button variant="outline-success" onClick={() => getWeather(query)}>
                  Search
                </Button>
              </Form>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center mb-4">
            <Col xs={12} sm={10} md={8} lg={7} xl={4}>
              <Home ccurrent={current} ccity={city} />
            </Col>
          </Row>
        </Container>
      </div> */}
    </>
  );
};

export default Search;
