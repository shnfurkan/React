import '../styles/About.css'
import BannerYeni from '../assets/banneryeni.jpg'

function About() {
    return (  
        <div className='about'>
            <div className='aboutTop' style={{backgroundImage: `url(${BannerYeni})`}}> </div>
        <div className='aboutBottom'>
        <h1>Hakkimizda</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque sunt corporis eos reiciendis velit, blanditiis ea autem ipsum quasi labore atque similique id inventore delectus magnam odit et minima? Eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque hic, aut, repudiandae quidem tenetur nisi distinctio unde aliquam voluptatum architecto quis repellendus nihil! Optio sapiente sit magni praesentium cum delectus?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus ducimus temporibus porro ad ipsam in rerum soluta! Odit animi aliquid voluptatem quis cumque quam, eaque aut dolorum praesentium voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sunt quia maiores praesentium ducimus quidem? Praesentium ad voluptates quas obcaecati aliquam, vero eos, doloremque non consequatur voluptatibus autem tempora rerum?
        </p>
        </div>
            
        </div>
    );
}

export default About;

