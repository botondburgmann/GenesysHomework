import { useState, useEffect } from "react";
import Home from "./components/Home";


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
  
  
  }, [charachters])
  

  return (
    <div>
      {charachters && <Home charachters={charachters}/>}
    </div>
  )
}

export default App
