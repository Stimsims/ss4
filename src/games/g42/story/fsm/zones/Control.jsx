import React from 'react';
import Button from './../../../components/views/Button.jsx';
import {selectFsmState, selectContained} from './../selectors.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {setZone,setFSMState} from './../reducer.js';
import {editUserAns, editItem} from './../../items/reducer.js';
import {constants, functions} from './../../Constants.js';
import {getRandomItem} from './../../../../../utilities/randomizer.js';

const S_IN = 'in',
    S_LOUNGE= 'lounge',
    I_ENTRY_1 = 'e1',
    I_LOUNGE = 'l1',
    I_MINE = 'mine';
    export const id = 'control';
class Control extends React.Component{
    constructor(props){
        super(props);
        this.onInput = this.onInput.bind(this);
        console.log("control constructor");
        console.log(props);
    }
    componentWillMount(){
        console.log("control mounting");
        // this.props.setFSMState(id, {
        //     [constants.fsm.keys.state]: I_ENTRY_1
        // });
    }
    componentWillUnmount(){
        console.log("control unmounting");
        this.props.setFSMState(id, {
            [constants.fsm.keys.state]: I_ENTRY_1
        });
    }
    onInput(input){
        //  console.log("control recieved input");
        //  console.log(this.props);
        if(input.kId === I_ENTRY_1){
            //is an entry point, irrelevant what state the FSM is in
            //send action to change location
            this.props.setZone(id, S_IN);
            // this.props.onInput({
            //     vId: this.props.vId,
            //     setZone: id
            // })
        }else{
            switch(this.props.fsm.state){
                case S_IN:
                    if(input.kId === I_MINE){
                     //   console.log("setting control fsm");
                        this.props.setZone(id, I_MINE);
                    }else if(input.kId === constants.items.engine || input.kId === constants.items.hull){
                        console.log("input, updating engine material to " + input.vId);
                        //get constants.elements[element].shc value and store as temp
                        let shc = constants.elements[input.vId].shc;
                        //edit time - type, id, props
                        this.props.editItem(constants.items.ship, input.kId, {temp: shc, element: input.vId})
                    }
                    break;
                case I_MINE:
                    if(input.kId === I_MINE){
                       // console.log("recieved input from mining action");
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_IN
                        });
                    }
                    break;
            }
        }

    }
    renderShip(){
        // if(this.props.items.ship){
        //     return this.props.items.ship.map((e, i) => {
        //         if(e.id === constants.items.engine){
        //             let engine = this.props.factory(constants.items.engine);
        //             console.log("factory view fsm engine", engine);
        //             return (<div>
        //                 <engine.component showEntry={false} factory={this.props.factory} 
        //             onInput={this.onInput} {...functions.propKid(I_MINE)}/>
        //             </div>)
        //            // return <p>hello</p>
        //         }else{
        //             //Object.keys(constants.elements) getRandomItem(materials)
        //             let metal = getRandomItem(Object.keys(constants.elements));
        //             console.log("rendering ship element", e);
        //             return (<div>
        //                 <p>ship part {e.id}, element: {e.element}, temperature tolerance {e.temp}</p>
        //                 <Button kId={e.id} vId={metal} 
        //                 onInput={this.onInput} text={metal}/>
        //             </div>)
        //         }
        //     })
        // }else{
        //     return <p>there is no ship</p>
        // }
        let engine = this.props.factory(constants.items.engine);
        console.log("factory view fsm engine", engine);
        return <engine.component showEntry={false} factory={this.props.factory} 
        onInput={this.onInput} {...functions.propKid(I_MINE)}/>
    }
    renderView(){
        console.log("control render view: ");
        console.log(this.props);
        if(false){
            
            return [
                <div>
                    <Button kId={I_ENTRY_1} onInput={this.onInput} text={'go to control'}/>
                </div>
            ]
        }else{
            switch(this.props.fsm.state){
                case S_IN:
                let engine = this.props.factory(constants.items.engine);
                console.log("engine view ", engine);
                let lounge = this.props.factory('lounge');
                console.log("lounge view ", lounge);
                let mine = this.props.factory(constants.fsm.actions.mine);
                return [
                    <div>
                        inside control room
                        <engine.component showEntry={true} factory={this.props.factory} 
                        onInput={this.onInput} {...functions.propKid(I_MINE)}/>
                        <lounge.component showEntry={true} factory={this.props.factory} 
                        onInput={this.onInput} {...functions.propKid(I_LOUNGE)}/>
                        <mine.component showEntry={true} factory={this.props.factory} 
                        onInput={this.onInput} {...functions.propKid(I_MINE)}/>
                        {/* <Button vId={I_ENTRY_1} onInput={this.onInput} text={'inside control'}/> */}
                    </div>
                ]

                case I_MINE:
                    let mine2 = this.props.factory(constants.fsm.actions.mine);
                    return [
                        <mine2.component showEntry={false} factory={this.props.factory} 
                            onInput={this.onInput} {...functions.propKid(I_MINE)}/>
                    ]
                case I_ENTRY_1:
                default:
                    return [
                        <div>
                            <Button kId={I_ENTRY_1} onInput={this.onInput} text={'go to control'}/>
                        </div>
                    ]
            }

        }

    }
    render(){
        return(
            this.renderView()
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            setZone, setFSMState, editUserAns, editItem
        },
        dispatch
    )
}

const mapStateToProps = (state, props) => {
    return {
        fsm: selectFsmState(state, id, {[constants.fsm.keys.state]: S_IN}),
        items: selectContained(state, props.id)
    }
}
export const component = connect(mapStateToProps, mapDispatchToProps)(Control);
export default component;
