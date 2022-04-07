import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import routing from './router';
// import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
    <div className="App">
      {routing}
      {/* <Contact/> */}
    </div>
    </Router>
  );
}

export default App;
