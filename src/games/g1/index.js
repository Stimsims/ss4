import Simulation from './simulation/index.js';
import Story from './story/index.js';
import Reducers from './store/reducers.js';

console.log("g1 index");

const sim = new Simulation();


function getSim(){
    return sim;
}

function getStory(){

}

function getReducers(){
    return Reducers;
}

function mapStateToProps(state){
    return{
        store: {
            time: state.simulation.time,
            temp: state.simulation.temp
        }
    }
}

function mapDispatchToProps(dispatch){
    
}

export default {
    getSim,
    getStory,
    getReducers,
    mapStateToProps
}