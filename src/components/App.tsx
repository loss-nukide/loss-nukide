import "@/App.css";
import Home from "@page/Home";
import JiroCall from "@page/JiroCall";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jiro-call" element={<JiroCall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
