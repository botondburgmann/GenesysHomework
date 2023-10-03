import { useState, useEffect, useMemo } from "react"
import { Link } from "react-router-dom";
import { Character } from "rickmortyapi/dist/interfaces";



function Home() {
  const [source, setSource] = useState("https://rickandmortyapi.com/api/character/?page=1")
  const [characters, setCharacters] = useState<Array<Character>>([])
  const [info, setInfo] = useState<any>()
  const [query, setQuery] = useState<string>("")

  const filteredCharacters = useMemo(() => {
    return characters.filter(character =>{
      return character.name.toLowerCase().includes(query.toLowerCase())
    }
    )
  }, [characters, query])

  useEffect(() => {
    fetch(source)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setInfo(data.info);
      setCharacters(data.results);      
    })
  }, [source])  

  return (
  <>
    Search:
    <input value={query} onChange={e => setQuery(e.target.value) } type="search" />
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Species</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {characters && filteredCharacters.map((character: Character) => (
          <tr key={character.id}>
            <td><img src={character.image} alt="an avatar of the character" /></td>
            <td><Link to={`/profile/${character.id}`}>{character.name}</Link></td>
            <td>{character.species}</td>
            <td>{character.status}</td>
          </tr>
        ))}
      </tbody>
    </table> 
    {info && (
    <>
    {info.prev && <button onClick={() => setSource("https://rickandmortyapi.com/api/character/?page=1")}>&#60;&#60;</button>}
    {info.prev && <button onClick={() => setSource(info.prev)}>&#60;</button>}
      {Array.from({ length: info.pages }, (_, index) => (
        <button key={index} onClick={() => setSource(`https://rickandmortyapi.com/api/character/?page=${index+1}`)}>{index + 1}</button>
      ))}
    {info.next && <button onClick={() => setSource(info.next)}>&#62;</button>}
    {info.next && <button onClick={() => setSource("https://rickandmortyapi.com/api/character/?page=42")}>&#62;&#62;</button>}
    </>
  )}

  </>
  )
}

export default Home