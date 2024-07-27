import { useEffect, useState } from 'react';
import Intro from './Intro';
import Navbar from '../../components/Navbar';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Stats from './Stats';
import ContactMe from './Contact';

function Home() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/get-portfolio-data');
        const data = await response.json();
        console.log(data);
        if (data.success) {
          setPortfolioData(data.data);
        } else {
          setError(data.message || 'Error fetching data');
        }
      } catch (error) {
        setError('Error fetching portfolio data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="no-scrollbar h-screen overflow-auto scroll-smooth">
      <Navbar />
      <section id='home'>
        <Intro />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='experiences'>
        <Experiences />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='stats'>
        <Stats />
      </section>
      <section id='contact'>
        <ContactMe />
      </section>
    </div>
  );
}

export default Home;
