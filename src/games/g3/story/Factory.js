import lounge from './zones/lounge/index.js';
import control from './zones/control/index.js';
import read from './questions/read/index.js';
import mine from './actions/mine/index.js';
import inventory from './actions/inventory/index.js';

export default (name) => {
    console.log('factory name' + name);
    switch(name){
        case control.id:
            return control;
        case lounge.id:
            return lounge;
        case read.id:
            return read;
        case mine.id:
            return mine;
        case inventory.id:
            return inventory;
    }
}