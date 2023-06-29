import "./style.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Switch } from "@mui/material";
const label = { inputProps: { "aria-label": "Switch demo" } };
import NearMeIcon from "@mui/icons-material/NearMe";
import NightlightIcon from "@mui/icons-material/Nightlight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="top">
        <AddCircleOutlineIcon style={{ cursor: "pointer" }}  />
        <p className="slideNext">
          <span className="slideNext1"></span>
          <span className="slideNext2"></span>
          <span className="slideNext3"></span>
        </p>
        <p>
          °C
          <Switch {...label} style={{ cursor: "pointer" }}  />
          °F
        </p>
      </div>
      <div className="middle fs-14">
        <div className="d-column">
          <p className="d-flex ">
            <NearMeIcon style={{ cursor: "pointer" }}  /> Patna, Bihar, India
          </p>
          <p className="d-flex fs-12">Today 29 june</p>
        </div>
        <div className="d-column">
          <p className="d-flex">
            <NightlightIcon style={{ cursor: "pointer" }}  /> 13:00
          </p>
          <p className="d-flex">
            <WbSunnyIcon style={{ cursor: "pointer" }}  /> 19:00
          </p>
        </div>
      </div>
      <div className="temp-wrapper">
        <div className="temp">
          <KeyboardArrowLeftIcon style={{ cursor: "pointer" }}  />
          <span style={{ fontSize: "36px", fontWeight:"bold" }}>25° </span>
          <KeyboardArrowRightIcon style={{ cursor: "pointer" }}  />
        </div>
        <span className="aligning"  >
          <WbSunnyIcon style={{ cursor: "pointer" }}  /> Sunny
        </span>
      </div>
    </div>
  );
};

export default SideBar;
