import { useState } from 'react'
import Kanji from './Kanji'
import Start from './components/Start';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // <Route path="/kanji" element={<Kanji />} />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kakuji" element={<Start />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App
