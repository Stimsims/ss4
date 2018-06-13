const initialState = {
    temp: 20,
    time: 0,
    tempTo: 15
}
  
export default (state = initialState, action = {}) => {
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
  