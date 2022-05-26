import { useEffect, useRef, useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';
import { v4 as uuidv4 } from 'uuid';



function App() {

    const [avys, setAvys] = useState([]);

    const newA = () => {
        const avis = {
            id: uuidv4(),
            color: randColor(),
            where: 'ganykla'
        }
        setAvys(a => [...a, avis])
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>AVYS</h1>
                <div className="kvc">
                    {
                        avys.map(a => <div key={a.id} className="kv" style={{background:a.color}}></div>)
                    }
                </div>
                <button onClick={newA}>Naujas Avinas</button>
            </header>
        </div>
    );
}

export default App;