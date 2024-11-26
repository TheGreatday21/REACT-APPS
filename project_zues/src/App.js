import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Income from "./pages/Income";
import Savings from "./pages/Savings";
import Budget from "./pages/Budget";

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/savings" element = {<Savings/>}/>
          <Route path = "/income" element = {<Income/>}/>
          <Route path = "/budget" element = {<Budget/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;