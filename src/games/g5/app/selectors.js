
import {store} from './keys.js';

export const selectFSMState = (state, id, def) => {
   // console.log("getFSMState id = " + id + " state: ", state);
   if(state.world[id] && state.world[id].fsm){
       return state.world[id].fsm;
   }
   return def;
   // return state.world[id]?state.world[id].fsm?:def;
}

export const selectContained = (state, id) => {
    return state.world[store.rContains][id];
    // let contained = state.world[store.rContains][id];
    // console.log("selectContained " + id, contained);
    // if(contained){
    //     let items = {};
    //     for (var key in contained) {
    //         if (contained.hasOwnProperty(key)) {
    //             console.log(key + " -> " + contained[key]);
    //             let ids = contained[key];
    //             let item = ids.map(e => {
    //                 let i = state.world[key][e];
    //               //   console.log("item " + e);
    //                 // console.log(i);
    //                 return i;
    //             })
    //           //   console.log("items:", items);
    //             // console.log(item);
    //             items[key] = item;
    //         }
    //     }
    //     console.log("selected items", items);
    //     return items;
    // }else{
    //     return {};
    // }
}

/*
export const selectContained = (state, id) => {
    let contained = state.world[store.rContains][id];
    console.log("selectContained " + id, contained);
    if(contained){
        let items = {};
        for (var key in contained) {
            if (contained.hasOwnProperty(key)) {
                console.log(key + " -> " + contained[key]);
                let ids = contained[key];
                let item = ids.map(e => {
                    let i = state.world[key][e];
                  //   console.log("item " + e);
                    // console.log(i);
                    return i;
                })
              //   console.log("items:", items);
                // console.log(item);
                items[key] = item;
            }
        }
        console.log("selected items", items);
        return items;
    }else{
        return {};
    }
}
*/