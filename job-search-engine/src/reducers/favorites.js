export default function (state = {}, action){
    switch(action.type) {
        case "ADD_FAVORITE":
                console.log("add fav state::::::::::::", state)
            return [...state, action.payload];
        case "REMOVE_FAVORITE":
            return [...state.filter(jobId => jobId !== action.payload)];
        default: 
            return state;
    }
}
