
import { useContext, useState } from 'react';

function SortFilter() {
    

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>Sort and Filter</h2>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Sort By</label>
                    <select className="form-control">
                        <option value="0">Please, select your Sort</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default SortFilter;