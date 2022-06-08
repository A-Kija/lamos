import { useReducer } from 'react';
import './App.scss';
import listReducer from './Reducers/listReducer';


function App() {

    const [list, listDispach] = useReducer(listReducer, []);

    const newList = () => {
        const action = {
            type: 'new'
        }
        listDispach(action);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>REDUCER</h1>
                <div className="kvc">
                <button onClick={newList}>New List</button>
                </div>
                <div className="kvc">
                    {
                        list.map((o, i) => <div key={i} className="kv">{o}</div>)
                    }
                </div>

            </header>
        </div>
    );

}

export default App;