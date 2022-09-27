import React from 'react';
import Navbar from './Components/NavBar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data'


function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item} />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
