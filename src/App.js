import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
    </div>
    </Router>
  );
}

export default App;
