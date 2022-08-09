import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import '../../../styles/components/socialmedia.sass';

export default function SocialMedia() {
  const socialMedia = [
    {name: 'linkedin', icon:<FaLinkedinIn />, link:'https://www.linkedin.com/in/luiz-ferreira-farias/'},
    {name: 'github', icon:<FaGithub />, link: 'https://github.com/Luiz-Farias-dev'},
  ]
  
  return (
    <section id='social-media'>
      {socialMedia.map(item => (
        <a 
          id={item.name}
          href={item.link} 
          className='social-btn' 
          key={item.name}
          >
            {item.icon}
        </a>
      ))}
    </section>
  );
}