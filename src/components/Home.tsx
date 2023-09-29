const Home = ({charachters}:any) => {
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
           {charachters.map((charachter: any) =>(
            <tr key={charachter.id} >
                <td><img src={charachter.image} alt="an avatar of the character" /></td>
                <td>{charachter.name}</td>
                <td>{charachter.species}</td>
                <td>{charachter.status}</td>
            </tr>
           ))}
       </tbody>
    </table>
  )
}

export default Home
