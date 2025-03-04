import { useState } from 'react'
import './App.css'

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  return (
    <>
      <div
        className={`menu ${isExpanded ? "expanded" : ""} ${isExiting ? "exiting" : ""}`}
        onMouseEnter={() => setIsExpanded(true)}  // Define como true ao passar o mouse
        onMouseLeave={() => setIsExpanded(false)} // Define como false ao sair
      >
        <span className={`left ${isExpanded ? "show" : ""}`}>DEV</span>
        <span>GSTV</span>
        <span className={`right ${isExpanded ? "show" : ""}`}>ART</span>
      </div>
    </>
  );
}

export default App;
