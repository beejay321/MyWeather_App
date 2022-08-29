import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Router>
        {/* <MyNav title="WeatherWidgets" /> */}
        <Route path="/" component={Search} />
      </Router>
    </>
  );
}

export default App;
