import { Component, ChangeEvent, FormEvent } from "react";
import { Button, Form, FormControl, Col, Container, Row } from "react-bootstrap";
import Home from "./Home";
import { useState, useEffect } from "react";
import { City, Current } from "../types/interface";

function Search() {
  const [query, setQuery] = useState<string>("Hamburg");
  const [city, setCity] = useState<City | null>(null);
  const [current, setCurrent] = useState<Current | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.currentTarget.value);
  };

  const getWeather = async (query: string) => {
    const ApiKey = "29f89c36ba2b5cddcb3735b724701235";
    try {
      let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${ApiKey}`);
      console.log(response);
      if (response.ok) {
        let result = await response.json();
        console.log(result);
        setCity(result);

        try {
          let NewResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city!.coord.lat}&lon=${city!.coord.lon}&units=metric&exclude=minutely&appid=${ApiKey}`);
          console.log(NewResponse);
          let data = await NewResponse.json();
          console.log(data);
          setCurrent(data);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log("This is the error", error);
    }
  };

  return (
    <div>
      <Container>
        <Form className="py-4">
          <Row>
            <Col sm={9}>
              <FormControl id="search" type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.currentTarget.value.toLowerCase())} className="mr-sm-2" />
            </Col>
            <Col>
              <Button onClick={() => getWeather(query)}>Search</Button>
            </Col>
          </Row>
        </Form>
        <br />
        {current && city && <Home title="Weather" current={current} city={city} />}
        {/* <Home title="Weather" city={city} /> */}
      </Container>
    </div>
  );
}

export default Search;

//   let response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIKEY}`);
