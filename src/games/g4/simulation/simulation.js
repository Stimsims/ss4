import {constants} from './../story/Constants.js';
import {nextStep} from './reducer.js';
import {editItem} from './../story/items/reducer.js';

export const update = (state) => {
    console.log("simulation state", state);
    let updates = {};
    let actions = []
    //perlin noise temperature sim
    updates = updateTime(state, updates);
    updates = updateTemp(state, updates);
    actions.push(nextStep(updates));

    //update engine state
    let ship = updateShip(state);
    actions = actions.concat(ship);
    console.log("update actions after ship", actions);

    return actions; //actions
} 
function updateShip(state){
    let actions = [];
    let engine = state.items[constants.items.ship][constants.items.engine];
    let temp = state.sim.temp;
    console.log("updateShip engine temp = " + engine.temp + " sim temp = " + temp);
    if(engine.temp < temp){
        actions.push(editItem(constants.items.ship, constants.items.engine, {state: constants.sim.engine.exploded}));
    }else if(engine.temp < (temp-10)){
        actions.push(editItem(constants.items.ship, constants.items.engine, {state: constants.sim.engine.overheat}));
    }
    //let hull = state.items[constants.items.ship][constants.items.hull];
    return actions;
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