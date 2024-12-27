import "@/App.css";
import Home from "@page/Home";
import JiroCall from "@page/JiroCall";
import Result from "@page/Result";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jiro-call" element={<JiroCall />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
