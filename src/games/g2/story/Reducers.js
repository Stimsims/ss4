
  
export const reducer = (
    state = {
        location: ['start'],
        key: 'start'
    }, 
    action = {}) => {
        switch (action.type) {
            case 'SET_LOCATION':
                return {
                    ...state,
                    ...action.payload
                }
            default:
                return state
        }
    }
    
    
    
function setLocation(location, key){
    return{
        type: 'SET_LOCATION',
        payload: {
            location, key
        }
    }
}
    
export const actions = {
    setLocation
}