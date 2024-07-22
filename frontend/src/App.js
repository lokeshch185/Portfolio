import './App.css';
import './index.css'
import Intro from './pages/Home/Intro';
import Navbar from './components/Navbar';
import About from './pages/Home/About';
import Experiences from './pages/Home/Experiences';
function App() {
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
    </div>
  );
}

export default App;
