import {constants} from './../story/Constants.js';
import {nextStep} from './reducer.js';

export const update = (state) => {
    console.log("simulation state", state);
    let updates = {};
    let actions = []
    //perlin noise temperature sim
    updates = updateTime(state, updates);
    updates = updateTemp(state, updates);
    actions.push(nextStep(updates));

    return actions; //actions
} 

function updateTime(state, next){
    let t = state.sim.t;
    next.t = t + 1;
    return next;
}
function updateTemp(state, next){
    let temp = state.sim.temp;
    next.temp = temp + Math.random();
    return next;
}