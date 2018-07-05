//responsible for updating fsm state, adding items, editing items, deleting items and maintaining their relationships

import {store} from './../keys.js';
  
export const reducer = (
    state = {
        [store.zLounge]:{
            fsm:{
                state: 0
            }
        },
        [store.rContains]:{}
    }, 
    action = {}
) => {
    switch (action.type) {
        case 'SET_FSM':
            //create a new fsm state, add old state to it if it exists
            let nFSM = {};
            if(state[action.payload.id] && state[action.payload.id].fsm){
                nFSM = {
                    ...state[action.payload.id].fsm,
                    ...action.payload.state
                }
            }else{
                nFSM = {
                    ...action.payload.state
                }
            }
            // let nFSM = Object.assign(state[action.payload.id]? state[action.payload.id].fsm:{},
            //     {...action.payload.state}
            // )
            console.log("new fsm state", nFSM);
            return {
                ...state,
                [action.payload.id]:{
                    ...state[action.payload.id],
                    fsm:nFSM
                }
            }
        case 'ADD_ITEM':
            //add item by type and id, and add relation for container element
            console.log("aboit to add_item item: ", action.payload.item);
            let container = {}
            if(state[store.rContains][action.payload.container]){
                container = {
                    ...state[store.rContains][action.payload.container]
                }
                //if the container exists, the type might exist too
                if(state[store.rContains][action.payload.container][action.payload.item.type]){
                    container[action.payload.item.type] = [
                        ...state[store.rContains][action.payload.container][action.payload.item.type]
                                ?state[store.rContains][action.payload.container][action.payload.item.type]:{},
                        action.payload.item.id
                    ];
                }
            }else{
                //the type definitely doesnt exist if the container doesnt
                container[action.payload.item.type] = [
                    action.payload.item.id
                ];
            }
            console.log('adding item to store', container);
            return {
                ...state,
                [action.payload.item.type]:{
                    ...state[action.payload.item.type],
                    [action.payload.item.id]:action.payload.item
                },
                [store.rContains]:{
                    ...state[store.rContains],
                    [action.payload.container]: container 
                }
            }
        default:
            return state
    }
}
//handled by parent reducer
export function setFSM(id, state){
    console.log("action setFSM id " + id + " state ", state);
    return {
        type: `SET_FSM`,
        payload:{
            id, state
        }
    }
}
//add item expects all items to have an id and type property, used in store organization
export function addItem(item, container){
    console.log("addItem container " + container, item);
    if(!container){
        throw new Error('my error! must define a container for the item');
    }
    return {
        type: `ADD_ITEM`,
        payload:{
            item, container
        }
    }
}