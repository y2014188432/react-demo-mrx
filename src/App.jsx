import './App.css';
import LeftPage from "./page/LeftPage";
import RightPage from "./page/RightPage";

function App() {
  return (
      <div className="main">
          <div className="left">
              <LeftPage name={'张三'}/>
          </div>
          <div className="right">
              <RightPage/>
          </div>
      </div>
  );
}

export default App;
