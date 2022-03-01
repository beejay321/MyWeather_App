import { Container, Row, Jumbotron } from "react-bootstrap";
import { City, Current } from "../types/interface";
import "../styles/styles.css";

interface HomeProps {
  ccurrent: Current | null;
  ccity: City | null;
}

const Home = ({ ccurrent, ccity }: HomeProps) => {
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  return (
    <>
      <Jumbotron fluid className="py-2">
        <Container>
          <Row>
            {ccurrent && (
              <div className="d-grid ">
                <h3 className="d-flex justify-content-center">{ccity!.name}</h3>
                <div className="d-flex justify-content-center">
                  <img className="d-flex  justify-content-center" height="60" src={`https://openweathermap.org/img/wn/${ccurrent.current.weather[0].icon}@2x.png`} alt={"slide number "} />
                </div>
                <div className="d-grid ">
                  <h3 className="d-flex justify-content-center">{Math.floor(ccurrent.current.temp)}°C </h3>
                  <h5 className="d-flex justify-content-center"> {ccurrent.current.weather[0].description} </h5>

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
            <div className="d-flex gap-4 ">
              {ccurrent.hourly.map((h, i) => (
                <div className="d-grid py-2 ">
                  <p>{new Date(h.dt * 1000).getHours()}</p>
                  <img className="d-block mb-3 " height="20" src={`https://openweathermap.org/img/wn/${h.weather[0].icon}@2x.png`} alt={"icon"} />
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
              <div className="d-flex  py-2  justify-content-center my-1 scroll2  gap-5 ">
                <div className="d-flex gap-3 py-2 ">
                  <p className="pt-2 m-0 days ">{days[new Date(h.dt * 1000).getDay()]}</p>
                  <img className=" d-block px-2 " height="40" src={`https://openweathermap.org/img/wn/${h.weather[0].icon}@2x.png`} alt={"icon"} />
                </div>
                <div className="d-flex py-2  justify-content-center gap-3  textend">
                  <p className="  pt-2 m-0  texts">L: {Math.floor(h.temp.min)}°C </p>
                  <p className="  pt-2 m-0 texts"> H: {Math.floor(h.temp.max)}°C</p>
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
