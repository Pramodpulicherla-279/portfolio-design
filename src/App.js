import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Resume from './components/resume/resume';
import Work1 from './components/work1/work1';
import Work2 from './components/work2/work2';
import Work3 from './components/work3/work3';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work1" element={<Work1 />} />
        <Route path="/work2" element={<Work2 />} />
        <Route path="/work3" element={<Work3 />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;