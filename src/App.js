import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './components/routing/routers/MainRouter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
