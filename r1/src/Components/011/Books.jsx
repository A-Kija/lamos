function Books({ books }) {

    if (books.length === 0) {
        return <div className="lds-dual-ring"></div>
    }
    return (
        <>
            {
                books.map(b => <div key={b.id}>{b.title}</div>)
            }
        </>
    );
}

export default Books;