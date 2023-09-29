import { useState, useEffect } from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  const [charachters, setCharachters] = useState<any>()

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => {
      return res.json()
    })
    .then(data => {
      setCharachters(data.results);
    })
  
  
  }, [])
  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={charachters && <Home charachters={charachters}/>} />
          <Route path="/profile/:id" element={charachters && <Profile/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
