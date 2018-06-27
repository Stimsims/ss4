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


