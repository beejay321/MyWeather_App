import { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import "../styles/styles.css";

import { Location, Current } from "../types/interface";
import "../styles/styles.css";

interface HomeProps {
  ccurrent: Current;
  location: Location;
}

const MyNav = ({ ccurrent, location }: HomeProps) => {
  const [query, setQuery] = useState<string>("Hamburg");
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

  const getWeather = async () => {
    console.log("This is the error");
  };

  return (
    <>
      <div>
        <div className="side-nav">
          <div className="side-nav-details">
            <div className="search">
              <Form className="d-flex justify-content-center">
                <FormControl type="search" placeholder="Search" className="search-form" aria-label="Search" value={query} onChange={(e) => setQuery(e.currentTarget.value.toLowerCase())} />
                {/* <Button variant="outline-success" className="search-btn" onClick={() => getWeather()}>
                  Search
                </Button> */}
                <div className="search-btn">Search</div>
              </Form>
            </div>
            <div className="weather-image">
              <img className="" height="150" src={ccurrent!.condition.icon} alt={ccurrent!.condition.icon} />
            </div>
            <div className="temp">{ccurrent!.temp_c}°c</div>

            <div className="condition">{ccurrent!.condition.text} </div>
            <div>
              <div className="current-date">
                <span className="p-2">Today</span>
                <span className="p-1">{days[new Date(location!.localtime_epoch * 1000).getDay()]} .</span>
                <span className="p-1 pt-2">{new Date(location!.localtime_epoch * 1000).getDate()}</span>
                {/* <span className="p-1 pt-2">{new Date(location!.localtime_epoch * 1000).getHours()}</span> */}
                <span className="p-1">{months[new Date(location!.localtime_epoch * 1000).getMonth()]}</span>

                {/* {location!.localtime}{" "} */}
              </div>
              <div className="location">{location!.name} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyNav;
