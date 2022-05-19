import { useState } from 'react';
import './App.css';

const katinukai = ['Pilkis', 'Murkis', 'Rainis'];

function App() {

    const [spalva, setSpalva] = useState('yellow');
    const [skaicius, setSkaicius] = useState(1);
    const [kv, setKv] = useState([]);

    // const mygtukas = () => {
    //     console.log('Aš gražus mygtukas');
    //     return mygtukoBrolis;
    // }

    // const mygtukoBrolis = () => {
    //     console.log('Aš gražus mygtuko brolis');
    // }

    const beArgumentu = () => {
        console.log('beArgumentu');
    }

    const suArgumentu = ka => {
        console.log('suArgumentu: ' + ka);
    }

    const keistiSpalva = () => {

        // const nauja = spalva === 'yellow' ? 'pink' : 'yellow'; BLOGAI!!!!!


        setSpalva(senojiSpalva => senojiSpalva === 'yellow' ? 'pink' : 'yellow');

        // console.log(spalva);

    }

    const skaiciuotuvas = ka => setSkaicius(s => s + ka);
    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{color: spalva}}>State {skaicius}</h1>

                {
                    katinukai.map((k, i) => <div key={i}>{k}</div>)
                }



                <button onClick={beArgumentu}>BE</button>
                <button onClick={() => suArgumentu('labas')}>SU</button>
                <button onClick={keistiSpalva}>Kita spalva</button>
                <button onClick={() => skaiciuotuvas(1)}>+1</button>
                <button onClick={() => skaiciuotuvas(-1)}>-1</button>
            </header>
        </div>
    );
}

export default App;