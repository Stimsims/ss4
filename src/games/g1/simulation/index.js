
//each tick it updates store state
console.log("g1 sim index");
class Simulation{
    constructor(){

    }
    getInterval(){
        return 1000;
    }
    update(state, step){
        console.log('updating sim');
    }
}

export default Simulation;