import '../../styles/components/sidebar.sass';

export default function SideBar() {
  const logo =  require("../../img/farias.jpeg")
  return (
    <aside id="sidebar">
      <img src={logo} alt='Avatar'/>
      <p className="title">Desenvolvedor front-end</p>
      <p>redes sociais</p>
      <p>indormações de contato</p>
      <a href="google.com" className="btn">Download currículo</a>
    </aside>
  );
};