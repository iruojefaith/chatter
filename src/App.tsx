import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Signup from "./pages/Login";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard'
import { Provider } from "./dashboard/Context";




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
