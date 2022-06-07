import { useReducer } from 'react';
import './App.scss';
import colorReducer from './Reducers/colorReducer';
 

function App() {

    // const [color, setColor] = useState('yellow');
    const [color, dispachColor] = useReducer(colorReducer, 'yellow')

    // const goPink = () => {
    //     setColor('pink');
    // }

    const goPink = () => {
        const action = {
            type: 'go_pink'
        }
        dispachColor(action);

    }

    const goYellow = () => {
        const action = {
            type: 'go_y'
        }
        dispachColor(action);
    }

    const goChange = () => {
        const action = {
            type: 'change_color'
        }
        dispachColor(action);
    }
    
    return (
        <div className="App">
          <header className="App-header">
           <h1 style={{backgroundColor: color}}>Welcome to Reducer</h1>
            <div className="kvc">
            <button onClick={goPink}>Go pink</button>
            <button onClick={goYellow}>Go yellow</button>
            <button onClick={goChange}>Go and Change</button>
            </div>
          </header>
        </div>
      );

}

export default App;