import '../../styles/components/sidebar.sass';
import ContactInformation from './ContatcInformantion';
import SocialMedia from './SocialMedia';


export default function SideBar() {
  const logo =  require("../../img/farias.jpeg")
  return (
    <aside id="sidebar">
      <img src={logo} alt='Avatar'/>
      <p className="title">Desenvolvedor front-end</p>
      <SocialMedia />
      <ContactInformation />
      <a href="Currículo Luiz Ferreira Farias Neto.pdf" download={'Currículo Luiz Ferreira Farias Neto.pdf'} className="btn">Download currículo</a>
    </aside>
  );
};