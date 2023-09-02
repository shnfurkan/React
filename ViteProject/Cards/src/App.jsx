import './App.css'
import Course from './Course'
import Angular from './images/Angular.jpg'
import Bootstrap from './images/Bootstrap.png'
import Ccsharp from './images/Ccsharp.png'
import Web from './images/Web.jpg'
import 'bulma/css/bulma.css'

function App() {

  return (
    
    <div className='container'>

<section class="hero is-danger">
  <div class="hero-body">
    <p class="title">
      Kartlarim
    </p>
  </div>
</section>

<div class="columns">
  <div class="column">
  <Course title='Angular' image={Angular} description='Angular çok işlevi olan, her alanda kullanilan ve sevilen bir türdür.'/>
  </div>
  <div class="column">
  <Course title='Bootstrap' image={Bootstrap} description='Bootstrap çok işlevi olan, her alanda kullanilan ve sevilen bir türdür.'/>
  </div>
  <div class="column">
  <Course title='Ccsharp' image={Ccsharp} description='Ccsharp çok işlevi olan, her alanda kullanilan ve sevilen bir türdür.'/>
  </div>
  <div class="column">
  <Course title='Web' image={Web} description='Web çok işlevi olan, her alanda kullanilan ve sevilen bir türdür.'/>
  </div>
</div>

</div>
  )
}
export default App



