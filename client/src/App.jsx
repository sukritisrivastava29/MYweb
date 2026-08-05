import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import FinanceOS from "./pages/FinanceOS";
// Later:
// import Triply from "./pages/Triply";
// import Weather from "./pages/Weather";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/financeos" element={<FinanceOS />} />

        {/* Later */}
        {/* <Route path="/projects/triply" element={<Triply />} /> */}
        {/* <Route path="/projects/weather" element={<Weather />} /> */}
      </Routes>
    </>
  );
}

export default App;