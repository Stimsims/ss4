const initialState = {
    temp: 20,
    time: 0,
    tempTo: 15
}
  
export default (
state = {
    temp: 20,
    time: 0,
    tempTo: 15
}, 
action = {}
) => {
    switch (action.type) {
        case 'STEP':
        return {
            ...state,
            ...action.payload
        }
        default:
        return state
    }
}
  

export function step(payload){
    return{
        type: 'STEP',
        payload
    }
}