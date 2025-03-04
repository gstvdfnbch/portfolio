import { useState } from 'react'
import './App.css'
import Dev from "./pages/Dev";
import Store from "./pages/Store";
import Menu from "./pages/Menu"
import Projects from "./pages/Projects";
// import Articles from "./pages/Articles"
// import Curriculum from "./pages/Curriculum";
// import ProjectDetail from "./pages/ProjectDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  return (
    <Router>
      <>
      <Routes>
        <Route path="/portfolio" element={<Menu />} />
        <Route path="/portfolio/dev" element={<Dev />} />
        <Route path="/portfolio/store" element={<Store />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        {/* <Route path="/portfolio/project/:id" element={<ProjectDetail />} />
        <Route path="/portfolio/articles" element={<Articles />} />
        <Route path="/portfolio/curriculum" element={<Curriculum />} />  */}
      </Routes>
      </>
    </Router>

  );
}

export default App;
