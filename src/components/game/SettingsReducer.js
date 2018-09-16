
  export const reducer = (state = {}, action = {}) => {
    switch (action.type) {
      case 'SET_SETTINGS':
        return {
          ...state,
          [action.payload.key]: action.payload.value
        }
      default:
        return state
    }
  }

  

export function setSettings(key, value){
    return {
        type: 'SET_SETTINGS',
        payload:{
            key, value
        }
    }
}
