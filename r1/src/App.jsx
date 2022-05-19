import { useState } from 'react';
import './App.css';

function App() {

    const [spalva, setSpalva] = useState('yellow');

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

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{color: spalva}}>State {skaicius}</h1>
                <button onClick={beArgumentu}>BE</button>
                <button onClick={() => suArgumentu('labas')}>SU</button>
                <button onClick={keistiSpalva}>Kita spalva</button>
            </header>
        </div>
    );
}

export default App;