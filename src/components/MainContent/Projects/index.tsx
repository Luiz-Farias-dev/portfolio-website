import Slider from "./Slider";
import '../../../styles/components/projects.sass';

export default function Projects() {
  const slides = [
    {url:'http://localhost:3000/slider/aluroniRestaurant.jpg', title:'Aluroni Restaurant', id: 0},
    {url:'http://localhost:3000/slider/pokemonSearcher.jpg', title:'Pokemon Searcher', id: 1},
    {url:'http://localhost:3000/slider/tasklist.jpg', title:'Task List', id: 2}
  ];

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="slide-container">
        <Slider  slides={slides}/>
      </div>
    </section>    
  );
}