import React, { useState } from 'react';
import './App.css';
import SingleColor from './SingleColor';
import Values from 'values.js'

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Im working fine');
  }

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder='#dddddd' />
          <button className="btn" type='submit'>generate</button>
        </form>
      </section>
      <section className="colors">
        <h4>list will be here</h4>
      </section>
    </>

  )
}

export default App;
