const initialState = {
    gapiReady: false,
    isSignedIn: false,
    isOnline: false
}
  
  export const reducer = (state = initialState, action = {}) => {
    console.log('api reducer action ', action);
    switch (action.type) {
      case 'SET_GAPI':
        return {
          ...state,
          gapiReady: action.payload.ready
        }
      case 'SET_ONLINE':
        return {
          ...state,
          isOnline: action.payload.online
        }
      case 'IS_SIGNED_IN':
        return {
          ...state,
          isSignedIn: action.payload.signedIn
        }
      default:
        return state
    }
  }

  

export function setGapi(ready){
    return {
        type: 'SET_GAPI',
        payload:{
            ready
        }
    }
}
export function setOnline(online){
  return {
      type: 'SET_ONLINE',
      payload:{
          online
      }
  }
}
export function setSignedIn(signedIn){
  return {
      type: 'IS_SIGNED_IN',
      payload:{
          signedIn
      }
  }
}