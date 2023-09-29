import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const Profile = () => {
    const { id } = useParams();
    const {data: charachter, error, isPending} = useFetch('http://localhost:5173/profile/' + id)

  return (
    <div>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {charachter && (
            <article>
                <h2>{charachter.name}</h2>
            </article>
        )}
    </div>
  )
}

export default Profile
