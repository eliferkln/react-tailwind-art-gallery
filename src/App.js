import React from 'react';
import Experience from './components/Experience';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Slider from './components/Slider';
import Content from './components/Content';

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Experience />
      <Newsletter />
      <Cards />
      <Content/>
    </div>
  );
}

export default App;
