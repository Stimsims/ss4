
  
export const reducer = (
    state = {
        
    }, 
    action = {}) => {
        switch (action.type) {
            case 'SET_STATE':
                return {
                    ...state,
                    ...action.payload
                }
            default:
                return state
        }
    }
    
    
    
function setState(payload){
    return{
        type: 'SET_STATE',
        payload
    }
}
    
export const actions = {
    setState
}