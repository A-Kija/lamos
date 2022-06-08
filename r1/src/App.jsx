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

    const sortList = () => {
        const action = {
            type: 'sort'
        }
        listDispach(action);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>REDUCER</h1>
                <div className="kvc">
                <button onClick={newList}>New List</button>
                <button onClick={sortList}>Sort List</button>
                </div>
                <div className="kvc">
                    {
                        list.map((o, i) => <div key={i} className="kv"><i>{o.number}</i></div>)
                    }
                </div>

            </header>
        </div>
    );

    

}

export default App;