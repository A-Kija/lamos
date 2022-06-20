import { useContext } from "react";
import TreeContext from "./TreeContext";

function Message() {

    const {message} = useContext(TreeContext);

    if (null === message) {
        return null;
    }

    return (
        <div className="show-message">
            <div class="alert alert-primary" role="alert">
                A simple primary alert—check it out!
            </div>
        </div>
    );

}

export default Message;