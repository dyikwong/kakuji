import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Kanji from './Kanji';
import Hiragana from './Hiragana';
import Katakana from './Katakana';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/kanji" element={<Kanji />} />
        <Route path="/hiragana" element={<Hiragana />} />
        <Route path="/katakana" element={<Katakana />} />

      </Routes>
    </div>
  );
}

export default App
