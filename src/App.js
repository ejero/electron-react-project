import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PageLayout from "./pages/PageLayout";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pageLayout" element={<PageLayout />} />
      </Routes>

    </div>
  );
}

export default App;
