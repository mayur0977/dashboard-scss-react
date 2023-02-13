import "../src/assets/css/style.css";
import Board from "./components/Board";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar />
        <Board />
      </div>
    </div>
  );
}

export default App;
