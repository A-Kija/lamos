import './App.scss';
import {useState} from 'react';
import Suo from './Components/024/Suo';

function App() {

    const [counter1, setCounter1] = useState(1);


    return (
        <div className="App">
          <header className="App-header">
            <h1>ConTeXt</h1>
            <Suo></Suo>
            <button onClick={() => setCounter1(c => c + 1)}>+1</button>
          </header>
        </div>
      );
    }
    
    export default App;
    