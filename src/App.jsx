import { useState } from 'react'
import Kanji from './Kanji'
import Start from './components/Start';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kakuji" element={<Start />} />
        <Route path="/kakuji/kanji" element={<Kanji />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App
