import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//components
import OverView from './Components/OverView/overView';
import Restaurants from './Components/restaturants';
import Nav from "./Components/navbar/Navbar";


function App() {
  return (
    <div> 
    <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/restaurant/:_id/overview" exact element={<OverView/>}/>
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
