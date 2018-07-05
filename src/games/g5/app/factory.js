import {store} from './keys.js';
import lounge from "./world/lounge/index.jsx";
import control from "./world/control/index.jsx";
import reading from "./world/reading/index.jsx";
import samples from "./world/samples/index.jsx";

const getFSM = (id) => {
    console.log("factory getting fsm " + id);
    switch(id){
        case store.zLounge:
            return lounge;
        case store.zControl:
            return control;
        case store.iRead:
            return reading;
        case store.iSample:
            return samples;
    }
}
export default getFSM;