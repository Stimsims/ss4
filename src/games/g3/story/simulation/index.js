import {setTemp} from './reducer.js';
function precise(x) {
    return Number.parseFloat(x).toPrecision(4);
  }
  function round(x){
      return Math.round( x * 10 ) / 10;
  }
const sim = {
    update: (props) => {
        // console.log("simulation update");
        // console.log(props);
        let currentTemp = props.simulation.temp;
        let targetTemp = props.simulation.targetTemp;
        let change = (targetTemp - currentTemp)/10;
        let time = props.simulation.time;
        props.setTemp(time + 1, round(currentTemp + change));
    },
    getActions: () => {
        return{
            setTemp
        }
    },
    getMapState: (state, props) => {
        return {
            simulation: state.simulation
        }
    }
}
export default sim;