import rand from "../Functions/rand";

function listReducer(state, action) {
    let newState;
    switch(action.type) {
        case 'new':
            newState = [...Array(10)].map(_ => ('' + rand(0, 9999)).padStart(4, 0));
            // newState = [];
            // for (let i = 0; i < 10; i++) {
            //     newState.push(('' + rand(0, 9999)).padStart(4, 0));
            // }
            break;
        default:
            newState = [...state];
    }


    return newState;
}

export default listReducer;