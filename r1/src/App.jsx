import { useState } from 'react';
import './App.scss';


function App() {

    const [kv, setKv] = useState([]);

    const add = () => {
        setKv(k => [...k, 1]);
    }

    return (
        <div className="App">
            <header className="App-header">
            <button onClick={add} className="a">A-DD</button>
            <div className="kvc">
                    {
                        kv.map((k, i) => <div key={i} className="kv">{k}</div>)
                    }
                </div>
            </header>
        </div>
    );


}
export default App;