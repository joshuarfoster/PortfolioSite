
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes/>
    </BrowserRouter>
  )
}

export default App;
