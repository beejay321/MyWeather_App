import { useEffect, useState } from "react";

import { Location, Current, Forecast, Hour } from "../types/interface";
import "../styles/styles.css";

interface HomeProps {
  ccurrent: Current;
  location: Location;
  forecast: Forecast;
  hour: Hour[];
}

const Home = ({ ccurrent, location, forecast, hour }: HomeProps) => {
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  return (
    <>
      <div className="main-div">
        <div>
          <div className="details">
            <div className=" d-flex justify-content-end gap-3 ">
              <div className="units">°C</div>
              <div className="units">°F</div>
            </div>
            <div className="daily-div">
              {hour.map((h) => (
                <div className="daily">
                  {new Date(location!.localtime_epoch * 1000).getHours() === new Date(h.time_epoch * 1000).getHours() ? <div> Now </div> : <div>{new Date(h.time_epoch * 1000).getHours()}</div>}
                  <div className="">
                    <img className="" height="75" src={h.condition.icon} alt={h.condition.icon} />
                  </div>
                  <div>{Math.floor(h.temp_c)}°c</div>
                </div>
              ))}
            </div>
            <div className="condition mt-5 mb-3"> Today's Highlights</div>
            <div className="daily-highlights">
              <div className="highlights">
                <div>Wind Status</div>
                <div>
                  <span>{ccurrent!.wind_kph}</span>
                  <span>mph</span>
                </div>
                <div>WSW</div>
              </div>
              <div className="highlights">
                <div>Humidity</div>
                <div>
                  <span>{ccurrent!.humidity}</span>
                  <span>%</span>
                </div>
                <div>progress bar</div>
              </div>
              <div className="highlights">
                <div>Visibility</div>
                <div>
                  <span>{ccurrent!.vis_km}</span>
                  <span> km</span>
                </div>
              </div>
              <div className="highlights">
                <div>Air Pressure</div>
                <div>
                  <span>{ccurrent!.pressure_mb}</span>
                  <span>hpa</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="">Created By Busola Dev</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
