import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { Character } from "rickmortyapi/dist/interfaces";

function Profile() {
  const { id } = useParams<string>();
  const [character, setCharacter] = useState<Character>()

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setCharacter(data);      
    })
  }, []) 

  return (
    <div>
      <Link to="/">Back to the homepage</Link>
      {character && 
      <article>
        <h2>{character.name}</h2>
        <img src={character.image} alt="An avatar of the character" />
        <p>{character.gender}</p>
        <p>{character.location.name}</p>
        <p>{character.origin.name}</p>
        <p>{character.species}</p>
        <p>{character.status}</p>
        {character.type !== "" &&  <p>{character.type}</p> }
      </article>  }
    </div>
  )
}

export default Profile
