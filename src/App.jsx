import { useState } from 'react'
import AppNavbar from './components/AppNavbar';
import Kanji from './Kanji'
import Hiragana from './Hiragana'
import Katakana from './Katakana'
import Results from './components/Results';
import Start from './components/Start';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/kakuji" element={<Home />} />
        <Route path="/kakuji/kanji" element={<Kanji />} />
        <Route path="/kakuji/hiragana" element={<Hiragana />} />
        <Route path="/kakuji/katakana" element={<Katakana />} />
        <Route path="/kakuji/results" element={<Results />} />
        <Route path="*" element={<Home />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App
