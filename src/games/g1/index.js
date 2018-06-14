import Simulation from './simulation/index.js';
import Story from './story/start/index.jsx';
import Reducers from './store/reducers.js';

console.log("g1 index");

function getSim(){
    return Simulation;
}

function getStory(){
    return Story;
}

function getReducers(){
    return Reducers;
}

export default {
    getSim,
    getStory,
    getReducers
}