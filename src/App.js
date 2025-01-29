import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AlimonyForm from './Components/AlimonyForm';
import Result from './Components/Result';
import Footer from './Components/Footer';
import Header from './Components/Header'; // Add this line
import './App.css';

function App() {
  return (
    <Router>
      <Header /> {/* Add this line */}
      <div className="content-wrapper mt-16"> {/* Added mt-16 for header space */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alimony" element={<AlimonyForm />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;