import {
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiCss3,
} from 'react-icons/di';
import { SiTypescript } from "react-icons/si";
import '../../../styles/components/skills.sass'

export default function Skills() {
  const skills = [
    {id: 'html', name: 'HTML5', icon:<DiHtml5/>},
    {id: 'css', name: 'CSS3', icon:<DiCss3/>},
    {id: 'js', name: 'Javascript', icon:<DiJsBadge/>},
    {id: 'react', name: 'Reactjs', icon:<DiReact/>},
    {id: 'type', name: 'Typescript', icon:<SiTypescript/>}
  ];

  return (
    <section className='skills'>
      <h2>Habilidades</h2>
      <div className='skills-grid'>
       {skills.map(item => (
        <div className='skills-card' id={item.id} key={item.id}>
          {item.icon}
          <div>
            <h3>{item.name}</h3>
          </div>
        </div>
       ))}
      </div>
    </section>
  );
}