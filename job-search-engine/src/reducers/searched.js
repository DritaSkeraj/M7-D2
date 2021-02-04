export default function (state = {}, action){
    switch(action.type) {
        case "SEARCH":
            return{
                ...state,
                searched: action.payload
            };
        default: 
            return state;
    }
}