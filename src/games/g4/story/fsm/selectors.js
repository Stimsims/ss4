import { createSelector } from 'reselect'
import constants from './../Constants.js';

export const selectFsmState = (state, id, def) => {
    // console.log("selectFsm " + id);
    // console.log(state);
    let fsm = state.fsm[id];
    return fsm? fsm: def;
}

export const selectContained = (state, id) => {
    let contained = state.relations.contains[id];
    // console.log("selectContained " + id);
    // console.log(contained);
    if(contained){
        let items = {};
        for (var key in contained) {
            if (contained.hasOwnProperty(key)) {
                //console.log(key + " -> " + contained[key]);
                let ids = contained[key];
                let item = ids.map(e => {
                    let i = state.items[key][e];
                    // console.log("item " + e);
                    // console.log(i);
                    return i;
                })
                // console.log("items:");
                // console.log(item);
                items[key] = item;
            }
        }
        return items;
    }else{
        return {};
    }
    //return contained?contained:{};
}

// export const selectFsmState = createSelector(
//     getFSM,
//     fsms => {
//         return fsms
//     } 
// )