// import { useState } from 'react';
import './bootstrap.css';
// import './App.scss';
// import getId from './Functions/getId';


function App() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card mt-4">
                            <div className="card-header">
                                <h2>Create new Ex</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" />
                                    <small className="form-text text-muted">Enter Ex name here.</small>
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <select className="form-control">
                                        <option value="1">Test</option>
                                        <option value="2">Written</option>
                                        <option value="3">Spoken</option>
                                    </select>
                                    <small className="form-text text-muted">Select Ex type here.</small>
                                </div>
                                <div className="form-group">
                                    <label>Place</label>
                                    <input type="text" className="form-control" />
                                    <small className="form-text text-muted">Enter Ex place here.</small>
                                </div>
                                <button type="button" class="btn btn-outline-primary">Create</button>
                            </div>
                        </div>
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