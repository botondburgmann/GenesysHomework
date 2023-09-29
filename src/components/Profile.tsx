import { useParams } from "react-router-dom";

const Profile = ({characters}:any) => {
    const { id } = useParams();
  return (
    <div>
        {characters.map((character: any) =>(
           character.id == id && <article key={character.id}>
            <h1>{character.name}</h1>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>type: {character.type}</p>
            <p>Gender: {character.gender}</p>
            <p>Location: {character.location.name}</p>
           </article>
           ))}
    </div>
  )
}

export default Profile
