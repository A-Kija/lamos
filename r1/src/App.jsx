import { useEffect, useState } from 'react';
import './bootstrap.css';
import Create from './Components/crud/Create';
import { create } from './Functions/localStorage';
// import './App.scss';



function App() {

    const [createData, setCreateData] = useState(null);

    // Create
    useEffect(() => {
        if (null === createData) {
            return;
        }
        create(createData);

    }, [createData])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create setCreateData={setCreateData}></Create>
                    </div>
                    <div className="col-8">
                        One of three columns
                    </div>
                </div>
            </div>
        </>
    );


}
export default App;