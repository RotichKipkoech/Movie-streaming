import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <AppRouter />
      </div>
    </Router>
  );
};

export default App;
