import MainContent from './components/MainContent';
import SideBar from './components/Sidebar';
import './styles/components/app.sass';

function App() {
  return (
    <div id='portfolio'>
      <h1>Luiz Farias</h1>
      <SideBar />
      <MainContent />

    </div>
  );
}

export default App;
