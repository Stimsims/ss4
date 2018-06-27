import * as lounge from './story/fsm/zones/Lounge';
import * as control from './story/fsm/zones/Control.jsx';
import * as mine from './story/fsm/actions/Mine.jsx';
import * as inventory from './story/fsm/actions/Inventory.jsx';
import * as idElem from './story/fsm/questions/IdentifyElem.jsx';
import * as AstSamp from './story/fsm/items/asteroidSample.jsx';
import * as Engine from './story/fsm/items/Engine.jsx';

export default (name) => {
    console.log('factory name' + name);
    switch(name){
        case control.id:
            return control;
        case lounge.id:
            return lounge;
        case mine.id:
            return mine;
        case inventory.id:
            return inventory;
        case idElem.id:
            return idElem;
        case AstSamp.id:
            return AstSamp;
        case Engine.id:
            return Engine;
    }
}