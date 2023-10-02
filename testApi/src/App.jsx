import "./App.css"
import axios from "axios"

function App() {

  const handleClick = () => {

const apiUrl = "http://api.tursys.com/oauth2/token";

const postData = {
  username: "NovantaB2S",
  password: "NovantaB2S2018",
  grant_type: "password",
  scope: "B2S"
};

const headers = {
  Authorization: "Basic UFJFVFRJR1JFSVpFTjpQUkVUVElHUkVJWkVO",
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
};

axios.post(apiUrl, new URLSearchParams(postData), { headers })
  .then(response => {
    console.log(response.data,55);
  })
  .catch(error => {
    console.error('Error:', error,34);
  });
  }

  return (
    <div>

      <button onClick={handleClick} className="api">ADD API</button>

    </div>
  )
}

export default App

