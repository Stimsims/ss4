
  export const reducer = (
    state = [

    ], 
    action = {}) => {
        switch (action.type) {
            case 'ADD_LOG':
                //console.log("setting " + action.payload.id + " state to " + action.payload.state);
                return [
                    ...state,
                    action.payload
                ];
            default:
                return state
        }
    }
    
//from(id,state) to(id, state)
export const addLog = (type, text) => {
    return {
        type: 'ADD_LOG',
        payload: {
            type, text
        }
    }
}


    
// export const actions = {
//     setZone
// }