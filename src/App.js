
import react, { useState, useEffect } from 'react';
import { FetchData } from './utils/Fetch';
import RenderCities from './components/cities';

import './App.css';

function App() {
  return(
    <div className="App">
  <FetchData />

  </div>
  )
}

export default App;
