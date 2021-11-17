import { Carousel, Col, Container, Row, Jumbotron } from "react-bootstrap";
import dishes from "../data/menu.json";
import { useEffect, useState } from "react";
import upperName from "../helpers/lib";
import { City, Current } from "../types/interface";
import "../styles/styles.css";

interface HomeProps {
  title: string;
  // something:string
  // current: Current;
  // city: City;
}

const Home = ({ title }: HomeProps) => {
  const [ccity, setCity] = useState<City | null>(null);
  const [ccurrent, setCurrent] = useState<Current | null>(null);

  useEffect(() => {
    console.log("why not working");
    const getWeather = async () => {
      const ApiKey = "29f89c36ba2b5cddcb3735b724701235";
      try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Vienna&appid=${ApiKey}`);
        console.log(response);
        if (response.ok) {
          let result = await response.json();
          console.log(result);
          setCity(result);

          if (result) {
            try {
              let NewResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result!.coord.lat}&lon=${result!.coord.lon}&units=metric&exclude=minutely&appid=${ApiKey}`);

              // let NewResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=48.2085&lon=16.3721&units=metric&exclude=minutely&appid=${ApiKey}`);
              console.log(NewResponse);
              let data = await NewResponse.json();
              console.log(data);
              setCurrent(data);
            } catch (error) {
              console.log(error);
            }
          }
        }
      } catch (error) {
        console.log("This is the error", error);
      }
    };
    getWeather();
  }, []);

  return (
    <>
      <Jumbotron fluid className="py-2">
        <Container>
          <Row>
            {ccurrent && (
              <div className="d-grid ">
                <h3 className="d-flex justify-content-center">{ccity!.name}</h3>
                <div className="d-flex justify-content-center">
                  <img className="d-flex  justify-content-center" height="60" src={`http://openweathermap.org/img/wn/${ccurrent.current.weather[0].icon}@2x.png`} alt={"slide number "} />
                </div>
                <div className="d-grid ">
                  <h3 className="d-flex justify-content-center">{Math.floor(ccurrent.current.temp)}°C </h3>
                  <h5 className="d-flex justify-content-center"> {ccurrent.current.weather[0].description} </h5>
                  {/* </div>
                <div className="d-grid  justify-content-center gap-1"> */}
                  <span className="d-flex justify-content-center text"> Humidity: {ccurrent.current.humidity}% </span>
                  <span className="d-flex justify-content-center text">Wind: {ccurrent.current.wind_speed}m/s </span>
                  <span className="d-flex justify-content-center ">Cloud cover: {ccurrent.current.clouds}% </span>
                </div>
              </div>
            )}
          </Row>
        </Container>
      </Jumbotron>

      <Container>
        {ccurrent && (
          <Row className=" my-3 scroll ">
            {/* <p  className=" pt-2">Cloud conditions will continue for the rest of the day</p> */}
            <div className="d-flex gap-4 ">
              {ccurrent.hourly.map((h, i) => (
                <div className="d-grid py-2 ">
                  <p>{new Date(h.dt * 1000).getHours()}</p>
                  <img className="d-block mb-3 " height="20" src={`http://openweathermap.org/img/wn/${h.weather[0].icon}@2x.png`} alt={"icon"} />
                  <p>{Math.floor(h.temp)}°C</p>
                </div>
              ))}
            </div>
          </Row>
        )}
      </Container>

      <Container>
        {ccurrent && (
          <Row>
            {ccurrent.daily.map((h, i) => (
              <div className="d-flex my-1 scroll2   ">
                {/* <p  className=" pt-2">Cloud conditions will continue for the rest of the day</p> */}
                <div className="d-grid gap-1 px-3 ">
                  <div className="d-flex gap-3 py-2 ">
                    <p className="pt-2 m-0 ">Today</p>
                    <img className="d-block " height="40" src={`http://openweathermap.org/img/wn/${h.weather[0].icon}@2x.png`} alt={"icon"} />

                    <div className="d-flex gap-5 justify-content-between textend">
                      <p className=" px-3 pt-2 m-0 "> H: {Math.floor(h.temp.max)}°C</p>
                    {/* </div>
                    <div className="  textstart"> */}
                      <p className=" pt-2 m-0 textstart">L: {Math.floor(h.temp.min)}°C </p>
                    </div>
                    {/* <p className="pt-2 m-0 ">{h.weather[0].main}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Home;
