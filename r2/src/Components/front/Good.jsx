function Good({good}) {

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>{good.title}</b>
                </div>
            </div>
        </li>
    );
}

export default Good;