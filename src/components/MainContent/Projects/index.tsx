import Slider from "./Slider";
import '../../../styles/components/projects.sass';

export default function Projects() {
  const slides = [
    {url:'https://luiz-portfolio-website.netlify.app0/slider/aluroniRestaurant.jpg', title:'Aluroni Restaurant', id: 0},
    {url:'https://luiz-portfolio-website.netlify.app/slider/pokemonSearcher.jpg', title:'Pokemon Searcher', id: 1},
    {url:'https://luiz-portfolio-website.netlify.app/slider/tasklist.jpg', title:'Task List', id: 2}
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