import { useReducer } from 'react';
import './App.scss';
import colorReducer from './Reducers/colorReducer';
import numberReducer from './Reducers/numberReducer';
import rand from './Functions/rand';
 

function App() {

    // const [color, setColor] = useState('yellow');
    const [color, dispachColor] = useReducer(colorReducer, 'yellow');
    const [numb, dispachNumb] = useReducer(numberReducer, '0000');
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

    const number1 = () => {
        const action = {
            type: 'do1'
        }
        dispachNumb(action);
    }

    const number2 = () => {
        const action = {
            type: 'do2',
            payload: rand(0, 100)
        }
        dispachNumb(action);
    }
    
    return (
        <div className="App">
          <header className="App-header">
           <h1 style={{backgroundColor: color}}>Welcome to Reducer
           <span> {numb} </span>
           </h1>
            <div className="kvc">
            <button onClick={goPink}>Go pink</button>
            <button onClick={goYellow}>Go yellow</button>
            <button onClick={goChange}>Go and Change</button>
            </div>
            <div className="kvc">
            <button onClick={number1}>Go One</button>
            <button onClick={number2}>Go Two</button>
            </div>
          </header>
        </div>
      );

}

export default App;