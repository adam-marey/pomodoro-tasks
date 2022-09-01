import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useMain } from './MainProvider';

function App() {
  const { isDarkMode } = useMain();
  const backgroundClassName = isDarkMode
    ? 'bg-charcoal-gray'
    : 'bg-charcoal-white';

  return <div className={`App ${backgroundClassName}`}></div>;
}

export default App;
