
import './App.css';
import Place from './Components/screens/Place';
import Places from './Components/screens/Places';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={< Places />} />
            <Route path="/place/:id" element={<Place />} />    
          </Routes>
        </Router>
      </div>
)};
export default App;

