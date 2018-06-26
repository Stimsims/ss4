import { addSample } from "../g3/story/items/reducer";

import {constants} from './story/Constants.js';

//Bug potential: templates found with item type, template and item cannot store items at same time
//concept: can the template of an item hold items distinct from that item? or are its items the same as the item it holds?
export const parentReducer = (state, action) => {
    console.log("parent reducer called");
    console.log(state);
    console.log(action);
    switch(action.type) {
        case "ADD_SAMPLE":
            let contents = state.relations[constants.relations.contains][constants.fsm.actions.inventory]? 
            state.relations[constants.relations.contains][constants.fsm.actions.inventory]:{}
            // console.log("parent reducer add sample");
            // console.log(contents);
            //add relation container of inventory to sample
            let ray = contents[action.payload.sample.type]? contents[action.payload.sample.type]:[]
            return {
                ...state,
                relations:{
                    [constants.relations.contains]:{
                        [constants.fsm.actions.inventory]:{
                            ...contents,
                            [action.payload.sample.type]: [
                                ...ray,
                                action.payload.sample.id
                            ]
                        }
                    }
                }
            }
            break;
        case 'ADD_SAMPLE_TO_STOCK':
        // addSampleToStock(sampleId){
            console.log("parent reducer add sample to stock");
            let samples = state.relations[constants.relations.contains][constants.fsm.actions.inventory][constants.items.asteroidSample];
            let stock = state.relations[constants.relations.contains][constants.fsm.actions.inventory][constants.items.stock]; 
            if(!stock){
                stock = [];
            }
            let sample = state.items[constants.items.asteroidSample][action.payload.sampleId];
            let filtered = samples.filter(s => {
                console.log("filtering sample " + s + " against " + action.payload.sampleId + " of element " + sample.id);
                if(s != action.payload.sampleId){
                    return s;
                }
            })
            console.log("filtered items", filtered);
            return {
                ...state,
                relations:{
                    [constants.relations.contains]:{
                        [constants.fsm.actions.inventory]:{
                            ...contents,
                            [constants.items.asteroidSample]: [
                                ...filtered
                            ],
                            [constants.items.stock]: [
                                ...stock,
                                sample.user.element
                            ]
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