import { useState } from 'react';
import './App.scss';
// import randColor from './Functions/randColor';
// import { v4 as uuidv4 } from 'uuid';



function App() {

    const [text, setText] = useState('');
    const [select, setSelect] = useState('tree');

    const inputText = e => {
        setText(e.target.value);
    }

    return (
        <div className="App">
            <header className="App-header">

                <input type="text" onChange={inputText} value={text}></input>
                <select value={select} onChange={e => setSelect(e.target.value)}>
                    <option value="one">Vienas</option>
                    <option value="two">Du</option>
                    <option value="tree">Trys</option>
                    <option value="ten">Daug</option>
                </select>
            </header>
        </div>
    );
}

export default App;