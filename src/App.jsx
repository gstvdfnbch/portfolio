import { useState } from 'react'
import './App.css'
import Menu from './pages/Menu'

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  return (
    <>
      <Menu />
    </>
  );
}

export default App;
