import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import './App.css';

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>

  );
}

export default App;
