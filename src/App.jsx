import { useState } from 'react'
import Kanji from './Kanji'
import Hiragana from './Hiragana'
import Katakana from './Katakana'
import Start from './components/Start';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kakuji" element={<Start />} />
        <Route path="/kakuji/kanji" element={<Kanji />} />
        <Route path="/kakuji/hiragana" element={<Hiragana />} />
        <Route path="/kakuji/katakana" element={<Katakana />} />
        <Route path="/kakuji/results" element={<Results />} />
        <Route path="*" element={<Start />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App
