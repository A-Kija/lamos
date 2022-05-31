import { useEffect, useState } from 'react';
import './bootstrap.css';
import Create from './Components/crud/Create';
import List from './Components/crud/List';
import { create, read } from './Functions/localStorage';
// import './App.scss';



function App() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [exes, setExes] = useState(null);

    const [createData, setCreateData] = useState(null);

    //Read
    useEffect(() => {
        setExes(read());
    }, [lastUpdate]);

    // Create
    useEffect(() => {
        if (null === createData) {
            return;
        }
        create(createData);
        setLastUpdate(Date.now());

    }, [createData])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create setCreateData={setCreateData}></Create>
                    </div>
                    <div className="col-8">
                        <List exes={exes}></List>
                    </div>
                </div>
            </div>
        </>
    );


}
export default App;