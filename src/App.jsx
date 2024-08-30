import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/css/global.css"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}