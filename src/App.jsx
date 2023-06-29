import SideBar from "./components/sidebar/SideBar";
import Graph from "./components/graph/Graph";
import MoreDtails from "./components/moreDetails/MoreDatails";
const App = () => {
  return (
    <div className="main-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="graph-and-more-container">
        <Graph />
        <MoreDtails />
      </div>
    </div>
  );
};

export default App;
