//import {constants} from './../story/Constants.js';

export const reducer = (
    state = {
        ui:{
            play: true
        },
        sim:{
            t: 0,
            temp: 20
        }
    }, 
    action = {}
) => {
    switch (action.type) {
        case 'NEXT_STEP':
            //console.log('action next step ', action); //{t: 1, temp: 20.75225369254921}
            return {
                ...state,
                sim: {
                    ...state.sim,
                    ...action.payload.step
                }
            };
        case 'PLAY_SIM':
            return{
                ...state,
                ui:{
                    ...state.ui,
                    play: action.payload.play
                }
            }
        default:
            return state;
    }
}

export function dispatchAny(action){
    return action;
}
    
export function nextStep(step){
    return{
        type: 'NEXT_STEP',
        payload: {
            step
        }
    }
}

export function playSim(play){
    return{
        type: 'PLAY_SIM',
        payload:{
            play
        }
    }
}