export const parentReducer = (state, action) => {
    console.log("parent reducer called");
    switch(action.type) {
        case "SET_ZONE" : {
            console.log("reducer set zone");
            console.log(action);
            return {
                ...state,
                fsm:{
                    ...state.fsm,
                    [action.payload.zone]:{
                        state: action.payload.state
                    }
                },
                game: {
                    ...state.game,
                    zone: action.payload.zone
                }
                // specifically pass state.b as an additional argument
                // a : handleSpecialCaseForA(state.a, action, state.b),
                // b : sliceReducerB(state.b, action)   setZone(zone, state){
            }        
        }
        default : return state;
    }
    return state;
}
