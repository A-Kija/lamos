import { useEffect, useRef, useState } from 'react';
import './App.scss';
import rand from './Functions/rand';

function App() {

    const [kv, setKv] = useState(null);
    const istorija = useRef([]);

    // PIRMAS KROVIMAS
    useEffect(() => {
        setKv(JSON.parse(localStorage.getItem('kv'))); // gali buti null arba []
    }, []);

    // UZSAUGOS POKYCIUS
    useEffect(() => {
        if (null === kv) {
            return;
        }
        localStorage.setItem('kv', JSON.stringify(kv));
    }, [kv]);


    const prideti = () => {
        const kiekis = rand(5, 10);
        const kvadratukai = [];
        for (let i = 0; i < kiekis; i++) {
            kvadratukai.push('^o^');
        }
        setKv(k => {
            istorija.current.unshift(null === k ? [...kvadratukai] : [...k, ...kvadratukai])
            return null === k ? [...kvadratukai] : [...k, ...kvadratukai];
        });
    }

    const isvalyti = () => {
        setKv([]);
    }

    const atgal = () => {

        console.log('click')

        if (istorija.current.length === 0) {
            setKv([]);
        }

        const senas = istorija.current.shift();

        setKv(senas);
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>PRAKTIMUMAS</h1>
                    <div className="kvc">
                        {
                            kv ? kv.map((k, i) => <div key={i} className="kv">{k}</div>) : null
                        }
                    </div>

                <button onClick={prideti}>Pridėti</button>
                <button onClick={isvalyti}>Išvalyti</button>
                <button onClick={atgal}>Atgal</button>
            </header>
        </div>
    );
}

export default App;