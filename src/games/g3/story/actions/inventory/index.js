
//import Factory from './../../Factory.js';
import {constants, messages} from './../../Constants.js';
import {setFSMState} from './../reducers.js';
import {addLog} from './../../../store/log.js';

//console.log("lounge importing constants " + constants);
const id = constants.actions.inventory;
const type = constants.types.actions;
const S_ENTRY = 'enter',
    S_OVERVIEW = 'look',
    S_ITEM = 'mine',
    S_ELEMENT = 'elem',
    R_ADD_ITEM = 'addItem';
var itemId = null;
const fsm = {
        type, id,
        onInput: (input, props) => {
                switch(props.mystate.state){
                    case S_OVERVIEW:
                        //can either back out, or view an item
                         if(input[constants.input.vId] === S_ENTRY){
                            props.setFSMState(props.id, S_ENTRY);
                            props.onInput(messages.output(props.id, {}))
                         }else{
                             //look for id in inventory
                             console.log("item clicked, id: " + input[constants.input.vId] + " has prop? " 
                             + props.items.samples.hasOwnProperty(input[constants.input.vId]))
                             if(props.items.samples.hasOwnProperty(input[constants.input.vId])){
                              //  item = props.items.samples[input[constants.input.vId]];
                                itemId =input[constants.input.vId];
                                props.setFSMState(props.id, S_ITEM);
                             }
                         }
                        break;
                    case S_ITEM:
                        //can back out, throw out or identify item attributes
                        //if specific attributes are filled in, can add item to materials
                        if(input[constants.input.vId] === S_OVERVIEW){
                            itemId = null;
                            props.setFSMState(props.id, S_OVERVIEW);
                        }else if(input[constants.input.vId] === R_ADD_ITEM){
                            console.log("adding item " + itemId);
                        }else if(input[constants.input.vId] === S_ELEMENT){
                            props.setFSMState(props.id, S_ELEMENT);
                        }
                        break;
                    case S_ELEMENT:
                        if(input[constants.input.vId] === S_ELEMENT){
                            //props.setFSMState(props.id, S_ELEMENT);
                            //return back to S_ITEM
                            props.setFSMState(props.id, S_ITEM);
                        }
                        break;
                    case S_ENTRY:
                    default:
                        if(input[constants.input.vId] === S_OVERVIEW){
                            props.setFSMState(props.id, S_OVERVIEW);
                            props.onInput(messages.action(props.id))
                        }
                        break;
                }
        },
        onRender: (builder, props, factory) => {
            console.log("fsm lounge render, props" + props.mystate.state);
            console.log(props);
            switch(props.mystate.state){
                case S_OVERVIEW:
                    // let items = props.inventory.samples.map(e => {
                    //     return builder.describeBtn(e.id, e.name)
                    // });
                    let btns = [];
                    for (var key in props.items.samples) {
                        if (props.items.samples.hasOwnProperty(key)) {
                            let e = props.items.samples[key];
                            btns.push(builder.describeBtn(e.id, e.name))
                        }
                    }
                    console.log("iventory items");
                    console.log(btns);
                    return [
                        builder.getText(0, 'Your inventory has the following:'),
                        builder.getButtonSet(1, [
                            builder.describeBtn(S_ENTRY, 'return')
                        ]),
                        builder.getButtonSet(2, btns)
                    ]
                case S_ITEM:
                /*
                weight: Math.random()*10 + 5,
                element: e
                */
                    let sItem = props.items.samples[itemId]
                    console.log('inventory', `item  element? ${sItem.user.element? true:false}`)
                    return [
                        builder.getText(0, `it is an asteroid,  
                        element: ${sItem.user.element? sItem.element: 'unknown'}
                        weight: ${sItem.user.weight? sItem.weight + 'g':'unknown'}
                        `),
                        builder.getLink(1, S_ELEMENT, 'identify sample'),
                        builder.getButtonSet(2, [
                            builder.describeBtn(R_ADD_ITEM, 'add to material stock', `${sItem.user.element? false:true}`),
                            builder.describeBtn(S_OVERVIEW, 'back')
                        ])
                    ]
                case S_ELEMENT:
                    return [
                        builder.getText(0, 'identifying element')
                    ]
                case S_ENTRY:
                default:
                    return [
                        builder.getButtonSet(0, [
                            builder.describeBtn(S_OVERVIEW, 'inspect inventory')
                        ])
                    ]
            } 
        },
        getActions: () => {
            return{
                setFSMState, //setFSMState(id, state)
                addLog
            }
        },
        getMapState: (state, props) => {
            return {
                mystate: state[type][props.id],
                items: state.actions.items
            }
        }
}
;
export default fsm;