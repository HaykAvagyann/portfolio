import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Introducing from './Components/Introducing/Introducing';
import MyProjects from './Components/MyProjects/MyProjects';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='section-inner'>
          <Header />
          <Introducing />
          <AboutMe />
          <MyProjects />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
