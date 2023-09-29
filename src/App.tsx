import { useState, useEffect } from "react";


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
    <p>Hello</p>
  )
}

export default App
