import { useState, useEffect } from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  const [characters, setcharacters] = useState<any>()

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => {
      return res.json()
    })
    .then(data => {
      setcharacters(data.results);
    })
  
  
  }, [])
  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={characters && <Home characters={characters}/>} />
          <Route path="/profile/:id" element={characters && <Profile characters={characters}/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
