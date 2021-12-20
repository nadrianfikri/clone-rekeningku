import { Routes, Route } from 'react-router-dom';
import { Home, Exchange } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="trade/:id/:coin-IDR" element={<Exchange />} />
    </Routes>
  );
}

export default App;
