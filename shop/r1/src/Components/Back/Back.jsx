import { useState } from 'react';
import BackContext from './BackContext';
import CatsCrud from './Cats/Crud';
import Nav from './Nav';
import ProductsCrud from './Products/Crud';

function Back({ show }) {

    const [createCat, setCreateCat] = useState(null);


    return (
        <BackContext.Provider value={{
            setCreateCat
        }}>
            {
                show === 'admin' ?
                    <>
                        <Nav />
                        <h1>BACK</h1>
                    </>
                    : show === 'cats' ? <CatsCrud /> :
                        show === 'products' ? <ProductsCrud /> : null
            }
        </BackContext.Provider>
    )
}
export default Back;