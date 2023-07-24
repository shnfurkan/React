import 'bulma/css/bulma.css'

function Course({title, image, description}) {
    return (  
        <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={image} alt=""/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      </div>
      <div class="media-content">
        <p class="title is-4">{title}</p>
      </div>
    </div>

    <div class="content">
    {description}
    </div>
  </div>
    );
}

export default Course;

