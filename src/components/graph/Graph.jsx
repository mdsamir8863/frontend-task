import "./style.css";
import userImg from "../../assets/Samir.png.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CloudIcon from "@mui/icons-material/Cloud";
const Graph = () => {
  return (
    <div>
      <div className="top-container ">
        <div className="text">
          <h5>Welcome Back Samir</h5>
          <p className="fs-12">Check out today's weather information </p>
        </div>
        <div className="img-container">
          <MoreHorizIcon style={{ cursor: "pointer" }} />
          <img className="userImg" src={userImg} alt="" style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className="graph-container">
        <div className="graph-top-text">
          <p>upcoming hours</p>
          <div className="adjusting-gap">
            <select name="precipitation" disabled id="">
              precipitation
              <option value="precipitation ">precipitation</option>F
            </select>
            <p className="nextDayBtn" style={{ cursor: "pointer" }} >
              next days <NavigateNextIcon style={{ fontSize: "12px" }} />
            </p>
          </div>
        </div>
        <div className="graph-data">
          <table>
            <td>
              <tr>Now</tr>
              <tr>
                <ThunderstormIcon />
              </tr>
              <tr>21°C</tr>
              <tr>
                <div className="line"></div>
              </tr>
              <tr>20%</tr>
            </td>
            <td>
              <tr>11:00</tr>
              <tr>
                <ThunderstormIcon />
              </tr>
              <tr>25°C</tr>
              <tr>
                <div className="line"></div>
              </tr>
              <tr>28%</tr>
            </td>
            <td>
              <tr>12:00</tr>
              <tr>
                {" "}
                <CloudIcon />
              </tr>
              <tr>31°C</tr>
              <tr>
                <div className="line"></div>
              </tr>
              <tr>30%</tr>
            </td>
            <td>
              <tr>13:00</tr>
              <tr>
                <WbSunnyIcon />
              </tr>
              <tr>29°C</tr>
              <tr>
                <div className="line"></div>
              </tr>
              <tr>20%</tr>
            </td>
            <td className="d-none">
              <tr>14:00</tr>
              <tr>
                <CloudIcon />
              </tr>
              <tr>28°C</tr>
              <tr>
                <div className="line"></div>
              </tr>
              <tr>30%</tr>
            </td>
            <td>
              <tr>15:00</tr>
              <tr>
                <WbSunnyIcon />
              </tr>
              <tr>31°C</tr>
              <tr>
                <div className="line"></div>
              </tr>
              <tr>24%</tr>
            </td>
            <td className="d-none400">
              <tr>16:00</tr>
              <tr>
                <CloudIcon />
              </tr>
              <tr>24°C</tr>
              <tr>
                <div className="line"></div>
              </tr>
              <tr>28%</tr>
            </td>
            <td>
              <tr>17:00</tr>
              <tr>
                <WbSunnyIcon />
              </tr>
              <tr>27°C</tr>
              <tr>
                <div className="line"></div>
              </tr>
              <tr>30%</tr>
            </td>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Graph;
