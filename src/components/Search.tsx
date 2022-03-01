import { Col, Button, Form, FormControl, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { City, Current } from "../types/interface";
import Home from "./Home";
import "../styles/styles.css";

const Search = () => {
  const [query, setQuery] = useState<string>("Hamburg");
  const [city, setCity] = useState<City | null>(null);
  const [current, setCurrent] = useState<Current | null>(null);
  const ApiKey = process.env.ApiKey;

  const getWeather = async (query: string) => {
    try {
      let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${ApiKey}`);
      if (response.ok) {
        let result = await response.json();
        console.log(result);
        setCity(result);

        if (result) {
          try {
            let NewResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result!.coord.lat}&lon=${result!.coord.lon}&units=metric&exclude=minutely&appid=${ApiKey}`);

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

  useEffect(() => {
    const getWeather = async () => {
      try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${ApiKey}`);
        if (response.ok) {
          let result = await response.json();
          console.log(result);
          setCity(result);

          if (result) {
            try {
              let NewResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result!.coord.lat}&lon=${result!.coord.lon}&units=metric&exclude=minutely&appid=${ApiKey}`);

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
  }, [city, current, query]);

  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default Search;
