import './App.scss';
import { useEffect, useState } from 'react';
import Books from './Components/011/Books';


  

function App() {

    const [count, setCount] = useState(1);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        console.log('YES'); // REDY!
    }, []);

    
    return (
        <div className="App">
          <header className="App-header">
           <h1>{count}</h1>
           <button onClick={() => setCount(c => c + 1)}>+1</button>
           <Books books={books}></Books>
          </header>
        </div>
      );

}

export default App;