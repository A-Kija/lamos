import { useContext } from "react";
import FrontContext from "./FrontContext";

function Tree({tree}) {

    const {setDeleteData, setModalData} = useContext(FrontContext);

    const handleComment = () => {

    }

    return (
        <li className="list-group-item">
            <div className="item-front">
                <div className="content">
                    <b>{tree.title}</b>
                    <span>{['Leaf', 'Spike', 'Palm'][tree.type - 1]}</span>
                    <i>{tree.height.toFixed(2)} m</i>
                    <u>{tree.good}</u>
                </div>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-success ml-2" onClick={handleComment}>I want to say</button>
                </div>
            </div>
        </li>
    );
}

export default Tree;