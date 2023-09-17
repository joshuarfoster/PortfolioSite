
import './App.css';
import { BrowserRouter} from "react-router-dom";
import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Joshua Foster'
  }, [])

  return (
    <BrowserRouter>
      <Navigation/>
      <Routes/>
    </BrowserRouter>
  )
}

export default App;
