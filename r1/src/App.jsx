import { useRef, useState } from 'react';
import './App.scss';

function App() {

    const [count, setCount] = useState(0);

    const mano = useRef(0);
    const panda = useRef();

    const add = () => {
        setCount(c => c + 1);
        mano.current = mano.current + 3;
        console.log(mano.current);
        // const p = document.querySelector('#panda');
        const p = panda.current;
        console.log(p.dataset.panda);
    }

    return (
        <div className="App">
          <header className="App-header">
           <h1>useRef LocalStorage {count}</h1>
           <button onClick={add}>+1</button>
           <div ref={panda} data-panda="miega"></div>
          </header>
        </div>
      );

}

export default App;