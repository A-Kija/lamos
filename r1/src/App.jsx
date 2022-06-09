import { useEffect, useReducer, useState } from 'react';
import './App.scss';
import axios from 'axios';
import booksReducer from './Reducers/booksReducer';

function App() {

    // const [books, setBooks] = useState([]);
    const [books, dispachBooks] = useReducer(booksReducer, []);

    useEffect(() => {
        axios.get('http://in3.dev/knygos/')
        .then(res => {
            const action = {
                payload:res.data,
                type:'get_from_server'
            }
            dispachBooks(action);
        })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>BOOKS REDUCER</h1>
                <div>
                    {
                       books.length ? books.map(b => <div key={b.id}>{b.title}</div>) : <h2>Loading...</h2>
                    }
                </div>
            </header>
        </div>
    );

    

}

export default App;