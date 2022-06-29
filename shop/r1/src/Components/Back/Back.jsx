import CatsCrud from './Cats/Crud';
import Nav from './Nav';
import ProductsCrud from './Products/Crud';

function Back({ show }) {

    if (show === 'admin') {
        return (
            <>
            <h1>BACK</h1>
            <Nav/>
            </>
        )
    }
    if (show === 'cats') {
        return (
            <CatsCrud/>
        )
    }
    if (show === 'products') {
        return (
            <ProductsCrud/>
        )
    }
}
export default Back;