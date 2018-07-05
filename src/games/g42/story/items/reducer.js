import {constants} from './../Constants.js';

export const reducer = (
    state = {
        [constants.items.ship]:{
            [constants.items.engine]:{
                id: constants.items.engine,
                element: 'iron',
                temp:constants.elements.iron.shc,
                state: constants.sim.engine.ok
            },
            [constants.items.hull]:{
                id: constants.items.hull,
                element: 'iron',
                temp:constants.elements.iron.shc,
                state: constants.sim.engine.ok
            }
        },
        [constants.items.asteroidSample]:{

        },
        [constants.items.stock]:{

        },
        [constants.items.sequence]:{

        }
    }, 
    action = {}
) => {
    switch (action.type) {
        case 'ADD_ITEM':
            console.log("items reducer add sample");
            //parent reducer also adds id to container relationship list
            return {
                ...state,
                [action.payload.type]:{
                    ...state[action.payload.type],
                    [action.payload.id]: action.payload.item
                }
            };
        case `DEL_ITEM`: 
            console.log("items reducer del item");
            let items = {
                ...state[action.payload.type]
            }
            delete items[action.payload.id];
            return {
                ...state,
                [action.payload.type]:items
            };
        case 'EDIT_ITEM':
            //if id is null, assume item is top level, if not, search for id
            let edit = action.payload.id? state[action.payload.type][action.payload.id]:state[action.payload.type];
            let nEdit = {
                ...edit,
                ...action.payload.props
            }
            if(action.payload.id){
                //if has an id, make edit a value of that id key
                nEdit = {
                    [action.payload.id]: nEdit
                }
            }
            // nEdit = {
            //     [action.payload.type]: nEdit
            // }
            console.log("edit item with props", action.payload.props);
            console.log("edit item = ", nEdit);
            return{
                ...state,
                [action.payload.type]:{
                    ...state[action.payload.type],
                    ...nEdit
                }
            }
        case 'EDIT_USER_ANS':
        // [action.payload.key]: action.payload.val
            let update = {
                ...action.payload.item,
                user:{
                    ...action.payload.item.user,
                    [action.payload.key]: action.payload.val
                }
            }
            return {
                ...state,
                [action.payload.item.type]:{
                    ...state[action.payload.item.type],
                    [action.payload.item.id]: update
                }
            }
        default:
            return state;
    }
}

export function addItem(container, type, id, item){
    //console.log("action set zone");
    console.log("action addItem " + container + " type " + type + " id " + id);
    return {
        type: `ADD_ITEM`,
        payload:{
            container, type, id, item
        }
    }
}
export function deleteItem(container, type, id, item){
    console.log("action deleteItem " + container + " type " + type + " id " + id);
    return {
        type: `DEL_ITEM`,
        payload:{
            container, type, id, item
        }
    }
}
export function editItem(type, id, props){
    console.log("action editItem type " + type + " id " + id);
    return {
        type: `EDIT_ITEM`,
        payload:{
            type, id, props
        }
    }
}
// //handled by parent reducer
export function editUserAns(item, key, val){
    console.log("action edit item key " + key + " val " + val);
    return {
        type: `EDIT_USER_ANS`,
        payload:{
            item, key, val
        }
    }
}
// export function editItem(item, edits){
//     console.log("action edit item",edits);
//     return {
//         type: `EDIT_ITEM`,
//         payload:{
//             item, edits
//         }
//     }
// }


