import About from './About';
import Projects from './Projects';
import Skills from './Skills'
import '../../styles/components/maincontent.sass';

export default function MainContent() {
  return (
    <main id='main-content'>
      <About />
      <Skills />
      <Projects />
    </main>
  );
};