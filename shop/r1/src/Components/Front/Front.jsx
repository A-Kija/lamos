import Nav from "./Nav";
import List from "./List";
import { useState, useEffect } from "react";
import { authConfig } from '../../Functions/auth';
import axios from 'axios';
import FrontContext from "./FrontContext";
import SortFilter from "./SortFilter";


function Front() {

    const [products, setProducts] = useState(null)


    useEffect(() => {
        axios.get('http://localhost:3003/products', authConfig())
            .then(res => setProducts(res.data));
    }, []);

    return (
        <FrontContext.Provider value={{
            products
        }}>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SortFilter />
                    </div>
                    <div className="col-12">
                        <List />
                    </div>
                </div>
            </div>
        </FrontContext.Provider>

    )
}
export default Front;