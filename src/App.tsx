import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Signup from "./Pages/Login";
import Login from "./Pages/Login";
import Dashboard from './Pages/Dashboard'
import { ChatterProvider } from "./Dashboard/Context";




function App() {
  return (
    <>
  <ChatterProvider>
    <Router>
        <div >
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Signup/>}/>
            <Route path="/blogs/*" element={<Dashboard/>}  />
            <Route path='/register' element={<Login />}/>
          </Routes>
        </div>
    </Router>
  </ChatterProvider>

    </>
  );
}

export default App;
