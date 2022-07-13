import Nav from "./Nav";
import List from "./List";
import { useState, useEffect } from "react";
import { authConfig } from '../../Functions/auth';
import axios from 'axios';
import FrontContext from "./FrontContext";
import SortFilter from "./SortFilter";


function Front() {

    const [products, setProducts] = useState(null);
    const [cats, setCats] = useState(null);
    const [filter, setFilter] = useState(0);


    const [cat, setCat] = useState(0);

    const [search, setSearch] = useState('');

    const [addCom, setAddCom] = useState(null);

    const [lastUpdate, setLastUpdate] = useState(Date.now());


    const doFilter = cid => {
        setCat(cid);
        setFilter(parseInt(cid));
    }

    useEffect(() => {
        let query;
        if (filter === 0 && !search) {
            query = '';
        } else if (filter) {
            query = '?cat-id=' + filter
        } else if (search) {
            query = '?s=' + search
        }


        axios.get('http://localhost:3003/products' + query, authConfig())
            .then(res => setProducts(res.data.map((p, i) => ({ ...p, row: i }))));
    }, [filter, search, lastUpdate]);

    useEffect(() => {
        axios.get('http://localhost:3003/cats', authConfig())
            .then(res => setCats(res.data));
    }, []);


    useEffect(() => {
        if (null === addCom) return;
        axios.post('http://localhost:3003/comments', addCom, authConfig())
            .then(res => {
                setLastUpdate(Date.now());
            })
    }, [addCom]);

    return (
        <FrontContext.Provider value={{
            products,
            setProducts,
            cats,
            setFilter,
            cat,
            setCat,
            doFilter,
            setSearch,
            setAddCom
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