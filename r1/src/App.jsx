import { useReducer } from "react";
import ld from "./Reducers/ld";
import './App.scss';

    const masyvas = [
        {id:3, name: 'Peter', bid: 487.77, date: '2022-06-01T10:37'},
        {id:7, name: 'Mary', bid: 125.33, date: '2022-06-01T11:37'},
        {id:8, name: 'Ūkas', bid: 78.25, date: '2022-06-01T09:22'},
        {id:9, name: 'Petras Dainorius', bid: 487.77, date: '2022-06-01T08:13'}
    ];

function App() {

    const [list, setList] = useReducer(ld, masyvas);


    return (
        <div className="App">
            <header className="App-header">
                <h1>Koks nors sortas</h1>
                <div className="kvc">
                    <select>
                        <option value="date_asc">DATE ASC</option>
                        <option value="date_desc">DATE DESC</option>
                        <option value="bid_asc">BID ASC</option>
                        <option value="bid_desc">BID DESC</option>
                        <option value="name_asc">NAME ASC</option>
                        <option value="name_desc">NAME DESC</option>
                        <option value="random">RAND</option>
                    </select>
                </div>

                <div>
                    {
                        list.map(b => (
                        <div className="kvc">
                            <span>ID: {b.id}</span>
                            <span>Name: {b.name}</span>
                            <span>BID: {b.bid}</span>
                            <span>Date: {b.date}</span>
                        </div>
                        ))
                    }
                    
                </div>
            </header>
        </div>
    );

    

}

export default App;

