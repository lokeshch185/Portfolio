import Intro from './Intro';
import Navbar from '../../components/Navbar';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Stats from './Stats';
import ContactMe from './Contact';
function Home() {
  return (
    <div className=" no-scrollbar h-screen overflow-auto scroll-smooth ">
      <Navbar/>
      <section id='home'>
        <Intro/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='experiences'>
        <Experiences/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='stats'>
        <Stats/>
      </section>
      <section id='stats'>
        <div><ContactMe/></div>
        
      </section>
    </div>
  );
}

export default Home;
