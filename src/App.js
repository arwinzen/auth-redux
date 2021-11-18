import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './containers/Login/login';
import Register from './containers/Register/register';
import Home from './containers/Home/home';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
