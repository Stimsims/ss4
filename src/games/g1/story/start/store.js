
  
export const reducer = (
state = {
    health: 100
}, 
action = {}) => {
    switch (action.type) {
        case 'CHANGE_HEALTH':
            return {
                ...state,
                health: state.health + action.payload
            }
        default:
            return state
    }
}



export function changeHealth(payload){
    return{
        type: 'CHANGE_HEALTH',
        payload
    }
}
