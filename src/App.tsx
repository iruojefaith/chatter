import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Signup from "./pages/Login";
import MainApp from './pages/MainApp';
import { Provider } from "./context/Context";




function App() {
  return (
    <>
  <Provider>
    <Router>
        <div >
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Signup/>}/>
            <Route path="/*" element={<MainApp/>}  />
          </Routes>
        </div>
    </Router>
  </Provider>

    </>
  );
}

export default App;
