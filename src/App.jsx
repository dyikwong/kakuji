import { useState } from 'react'
import AppNavbar from './components/AppNavbar';
import Kanji from './pages/Kanji/Kanji'
import Hiragana from './pages/Hiragana/Hiragana'
import Katakana from './pages/Katakana/Katakana'
import Results from './components/Results';
import Start from './components/Start';
import Home from './Home';
import KanjiStart from './pages/Kanji/KanjiStart';
import HiraganaStart from './pages/Hiragana/HiraganaStart';
import KanjiQuiz from './pages/Kanji/KanjiQuiz';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/kakuji" element={<Home />} />
        <Route path="/kakuji/kanji" element={<KanjiStart />} />
        <Route path="/kakuji/kanji/quiz" element={<KanjiQuiz />} />
        <Route path="/kakuji/hiragana" element={<HiraganaStart />} />
        <Route path="/kakuji/katakana" element={<Katakana />} />
        <Route path="/kakuji/results" element={<Results />} />
        <Route path="*" element={<Home />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App
