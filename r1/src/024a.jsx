import './App.scss';
import {useEffect, useState} from 'react';
import axios from 'axios';
function App() {

    const [trees, setTrees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/medziai')
        .then(res => {
            setTrees(res.data);
        });
    }, []);

    return (
        <div className="App">
          <header className="App-header">
            <h1>Medžiai</h1>
            {
                trees.map(t => <div key={t.id}>{t.title}</div>)
            }
          </header>
        </div>
      );
    }
    
    export default App;
    