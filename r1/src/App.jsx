import logo from './logo.svg';
import './App.css';
import Hello from './Components/009/Hello';
import Kurmis from './Components/009/Kurmis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello/>
        <Hello></Hello>
        <Hello></Hello>
        <Kurmis></Kurmis>
      </header>
    </div>
  );
}

export default App;
