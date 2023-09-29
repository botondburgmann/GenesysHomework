import { Link } from "react-router-dom"

const Home = ({characters}:any) => {
  return (
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
           {characters.map((character: any) =>(
            <tr key={character.id} >
                <td><img src={character.image} alt="an avatar of the character" /></td>
                <td><Link to={`/profile/${character.id}`}>{character.name}</Link></td>
                <td>{character.species}</td>
                <td>{character.status}</td>
            </tr>
           ))}
       </tbody>
    </table>
  )
}

export default Home
