import { useState } from 'react';
import './App.scss';
import getId from './Functions/getId';


function App() {

    const [kv, setKv] = useState([]);

    const add = () => {
        setKv(k => [...k, {id: getId('KV'), name: 'Jonas'}]);
    }

    return (
        <div className="App">
            <header className="App-header">
            <button onClick={add} className="a">A-DD</button>
            <div className="kvc">
                    {
                        kv.map(k => <div key={k.id} className="kv">{k.id}</div>)
                    }
                </div>
            </header>
        </div>
    );


}
export default App;