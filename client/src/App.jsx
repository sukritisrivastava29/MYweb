import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <>
      <Cursor />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;