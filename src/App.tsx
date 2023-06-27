import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Signup from "./Pages/Login";
import Login from "./Pages/Login";
import Dashboard from './Pages/Dashboard'
import { Provider } from "./Dashboard/Context";




function App() {
  return (
    <>
  <Provider>
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
  </Provider>

    </>
  );
}

export default App;
