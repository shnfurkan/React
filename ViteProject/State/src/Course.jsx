import Angular from './images/Angular.jpg'
import Bootstrap from './images/Bootstrap.png'
import Ccsharp from './images/Ccsharp.png'
import Web from './images/Web.jpg'

const picture = {
    Angular,
    Bootstrap,
    Ccsharp,
    Web
};

function Course({value}) {
    return (  
        <div>
<img src={picture[value]}></img>
        </div>
    );
}

export default Course;
