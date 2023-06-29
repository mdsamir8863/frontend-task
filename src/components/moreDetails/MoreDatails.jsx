import "./style.css";

import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
const MoreDatails = () => {
  return (
    <div>
      <h5 style={{margin:"1rem 0rem"}}>More details of today's weather</h5>
      <div className="weather-container">
        <div className="box-container fs-12">
          <div className="box humidity">
            <div className="top">
              <p>Humidity</p>
              <AirIcon color="primary" />
            </div>
            <p className="" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>85%</span>{" "}
              bad
            </p>
            <div className="ratio fs-10">
              <p>
                Good
                <p>
                  <meter id="%" value="10" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
              <p style={{padding: "0 5px"}}>
                Normal
                <p>
                  <meter id="%" value="8" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
              <p>
                bad
                <p>
                  <meter id="%" value="5" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
            </div>
          </div>
          <div className="box humidity">
            <div className="top">
              <p>Wind</p>
              <AirIcon color="primary" />
            </div>
            <p className="" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>85%</span>{" "}
              bad
            </p>
            <div className="ratio fs-10">
              <p>
                Good
                <p>
                  <meter id="%" value="10" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
              <p style={{padding: "0 5px"}}>
                Normal
                <p>
                  <meter id="%" value="8" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
              <p>
                bad
                <p>
                  <meter id="%" value="5" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
            </div>
          </div>
          <div className="box humidity">
            <div className="top">
              <p>Precipitation</p>
              <AirIcon color="primary" />
            </div>
            <p className="" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>85%</span>{" "}
              bad
            </p>
            <div className="ratio fs-10">
              <p>
                Good
                <p>
                  <meter id="%" value="10" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
              <p style={{padding: "0 5px"}}>
                Normal
                <p>
                  <meter id="%" value="8" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
              <p>
                bad
                <p>
                  <meter id="%" value="5" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
            </div>
          </div>
          {/* <div className="box wind"></div>
          <div className="box precipitation"></div> */}
        </div>
        <div className="box-container fs-12">
          <div className="box humidity">
            <div className="top">
              <p>UV index</p>
              <AirIcon color="primary" />
            </div>
            <p className="" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>85%</span>{" "}
              bad
            </p>
            <div className="ratio fs-10">
              <p>
                Good
                <p>
                  <meter id="%" value="10" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
              <p style={{padding: "0 5px"}}>
                Normal
                <p>
                  <meter id="%" value="8" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
              <p>
                bad
                <p>
                  <meter id="%" value="5" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
            </div>
          </div>
          <div className="box humidity">
            <div className="top">
              <p>Feels like</p>
              <AirIcon color="primary" />
            </div>
            <p className="" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>85%</span>{" "}
              bad
            </p>
            <div className="ratio fs-10">
              <p>
                Good
                <p>
                  <meter id="%" value="10" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
              <p style={{padding: "0 5px"}}>
                Normal
                <p>
                  <meter id="%" value="8" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
              <p>
                bad
                <p>
                  <meter id="%" value="5" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
            </div>
          </div>
          <div className="box humidity">
            <div className="top">
              <p>Chance of rain</p>
              <AirIcon color="primary" />
            </div>
            <p className="" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>85%</span>{" "}
              bad
            </p>
            <div className="ratio fs-10">
              <p>
                Good
                <p>
                  <meter id="%" value="10" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
              <p style={{padding: "0 5px"}}>
                Normal
                <p>
                  <meter id="%" value="8" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
              <p>
                bad
                <p>
                  <meter id="%" value="5" min="0" max="10">
                    10
                  </meter>
                </p>
              </p>
            </div>
          </div>
          {/* <div className="box wind"></div>
          <div className="box precipitation"></div> */}
        </div>
      </div>
    </div>
  );
};

export default MoreDatails;
