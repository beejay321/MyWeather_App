import { Carousel, Col, Container, Row, Jumbotron } from "react-bootstrap";
import dishes from "../data/menu.json";
import { useState } from "react";
import upperName from "../helpers/lib";
import { City, Current } from "../types/interface";
import "../styles/styles.css";

interface HomeProps {
  title: string;
  current: Current;
  city: City;
}

const Home = ({ title, current, city }: HomeProps) => {
  return (
    <>
      <Jumbotron fluid className="py-5">
        <Container>
          <Row className="justify-content-center mt-3">
            <Col>
              <h2>{city.name}</h2>
              <h3> Weather </h3>
            </Col>
            <Col>
              {" "}
              <img className="d-block " height="120" src={`http://openweathermap.org/img/wn/${current.current.weather[0].icon}@2x.png`} alt={"slide number "} />
            </Col>
            <Col>
              <h2>{current.current.temp}°C </h2>
              <h3> {current.current.weather[0].description} </h3>
              
            </Col>
          </Row>
          <Row className="py-5">
            <Col>
              <h5>humidity: {current.current.humidity}%</h5>
            </Col>
            <Col>
              <h5>wind: {current.current.wind_speed}m/s </h5>
            </Col>
            <Col>
              <h5> cloud cover: {current.current.clouds}%</h5>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container>
        <Row className="justify-content-center ">
          <div className="d-block">
            <div> Next 24 hours</div>
            <Row className="scroll">
              {current.hourly.map((h, i) => (
                <Col>
                  <div>12</div>
                   <div>
                    {" "}
                    <img className="d-block " height="20" src="http://openweathermap.org/img/wn/10d@2x.png" alt={"icon"} />
                  </div> 
                  <div>{h.temp}°C</div>
                </Col>
              ))}
            </Row>
          </div>
        </Row>
      </Container>

      <Container className="py-5">
        {current.daily.map((h, i) => (
          <Row className="justify-content-center mt-3" key={h.dt}>
            <Col>
              <Row>
                <Col>
                  <img className="d-block  " height="80" src= {`http://openweathermap.org/img/wn/${h.weather[0].icon}@2x.png`} alt={"icon"} />
                </Col>
                <Col className="d-block  pt-4">{h.weather[0].description}</Col>
                <Col></Col>
              </Row>
            </Col>

            <Col className="d-block  pt-4">
              H:{h.temp.max}°C / L:{h.temp.min}°C
            </Col>
            {/* <Col>L:{h.temp.min}°C</Col> */}
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Home;
