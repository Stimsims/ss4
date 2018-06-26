import { createSelector } from 'reselect'
import constants from './../Constants.js';

export const selectFsmState = (state, id, def) => {
    console.log("selectFsm " + id);
    console.log(state);
    let fsm = state.fsm[id];
    return fsm? fsm: def;
}

// export const selectFsmState = createSelector(
//     getFSM,
//     fsms => {
//         return fsms
//     } 
// )