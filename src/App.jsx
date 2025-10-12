import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Kanji from './Kanji';

// import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Navbar />
      <h1>App</h1>
      <Routes>
        <Route path="/kanji" element={<Kanji />} />

      </Routes>
    </div>
  );
}

export default App
