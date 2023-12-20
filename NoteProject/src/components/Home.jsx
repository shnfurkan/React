import "../styles/Home.css"
import note from "../assets/3.jpg"

function Home() {
    return (  
<div className="HomePage">
    <div className="image-container">
    <img src={note}/>
    </div>
  <div className="text-container">
    <div className="homeTitle">Not Sistemi</div><br/>
    <div className="homeDescription">Not dünyamıza hoşgeldiniz. Keyfinize bakın. Geri dönüşlerinizi bekliyoruz.</div>
  </div>
</div>
)
}
export default Home;