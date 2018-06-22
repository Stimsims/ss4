
  
export const reducer = (
    state = {
        time:1,
        temp: 40,
        targetTemp: 20,
        tempData:[

        ]
    }, 
    action = {}) => {
        switch (action.type) {
            case 'SET_TEMP':
                return {
                    ...state,
                    time: action.payload.time,
                    temp: action.payload.temp,
                    tempData: [
                        ...state.tempData,
                        {time: action.payload.time, temp: action.payload.temp}
                    ]
                };
            default:
                return state
        }
    }
    
export function setTemp(time, temp){
    return{
        type: 'SET_TEMP',
        payload: {
            time,
            temp
        }
    }
}

