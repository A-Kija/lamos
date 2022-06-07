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
    
    return (
        <div className="App">
          <header className="App-header">
           <h1 style={{backgroundColor: color}}>Welcome to Reducer</h1>
            <button onClick={goPink}>Go pink</button>
          </header>
        </div>
      );

}

export default App;