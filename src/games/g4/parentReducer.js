import { addSample } from "../g3/story/items/reducer";

import {constants} from './story/Constants.js';


//Bug potential: templates found with item type, template and item cannot store items at same time
//concept: can the template of an item hold items distinct from that item? or are its items the same as the item it holds?
export const parentReducer = (state, action) => {
    // console.log("parent reducer called");
    // console.log(state);
    // console.log(action);
    switch(action.type) {
        case "ADD_ITEM":
            let contents = state.relations[constants.relations.contains][action.payload.container]? 
            state.relations[constants.relations.contains][action.payload.container]:{}
            let ray = contents[action.payload.type]? contents[action.payload.type]:[]
            let index = ray.indexOf(action.payload.id);
            //if the item is not already linked, add it to the array
            if(index <= -1){
                return {
                    ...state,
                    relations:{
                        [constants.relations.contains]:{
                            ...state.relations[constants.relations.contains],
                            [action.payload.container]:{
                                ...contents,
                                [action.payload.type]: [
                                    ...ray,
                                    action.payload.id
                                ]
                            }
                        }
                    }
                }
            }
            break;
        case `DEL_ITEM`:
            let contents2 = state.relations[constants.relations.contains][action.payload.container];
            let ray3 = contents2[action.payload.type].filter(e => {
                if(e != action.payload.id){
                    return e;
                }
            })
            return {
                ...state,
                relations:{
                    [constants.relations.contains]:{
                        ...state.relations[constants.relations.contains],
                        [action.payload.container]:{
                            ...contents2,
                            [action.payload.type]: ray3
                        }
                    }
                }
            }
            break;
        case "MOVE_ITEM":
            console.log("parent reducer move item");
            break;
        case "SET_ZONE" : {
            // console.log("reducer set zone");
            // console.log(action);
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

export const moveItem = (from, to, item) => {
    return{
        type: "MOVE_ITEM",
        payload:{
            from, to, item
        }
    }
}