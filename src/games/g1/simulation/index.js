
//each tick it updates store state
import Sim from './../components/Simulation.jsx';
console.log("g1 sim index");
class Simulation extends Sim{
    constructor(props){
        super(props);
    }
    getInterval(){
        return 5000;
    }
    update(){
        console.log("simulation update!!");
        // this.props.actions.dispatch.step({
        //     time: 10,
        //     temp:30
        // })
    }
}

export default Simulation;