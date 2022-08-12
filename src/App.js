import './App.css';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Books />} />
    </Routes>
   
  );
}

export default App;
