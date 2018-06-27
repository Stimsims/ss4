import React from 'react';
import Button from './../../../components/views/Button.jsx';
import {selectFsmState, selectContained} from './../selectors.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {setZone,setFSMState} from './../reducer.js';
import {editUserAns} from './../../items/reducer.js';
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
                    }else if(input.kId === constants.items.engine){
                        console.log("input, updating engine material to " + input.vId);
                    }else if(input.kId === constants.items.hull){
                        console.log("input, updating hull material to " + input.vId);
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
        if(this.props.items.ship){
            return this.props.items.ship.map((e, i) => {
                //Object.keys(constants.elements) getRandomItem(materials)
                let metal = getRandomItem(Object.keys(constants.elements));
                console.log("rendering ship element", e);
                return <div>
                    <p>ship part {e.id}, element: {e.element}, temperature tolerance {e.temp}</p>
                    <Button kId={e.id} vId={metal} 
                    onInput={this.onInput} text={metal}/>
                </div>
            })
        }else{
            return <p>there is no ship</p>
        }
    }
    renderView(){
        // console.log("control render view: ");
        // console.log(this.props);
        if(this.props.showEntry){
            return [
                <div>
                    <Button kId={I_ENTRY_1} onInput={this.onInput} text={'go to control'}/>
                </div>
            ]
        }else{
            switch(this.props.fsm.state){
                case I_MINE:
                    let mine2 = this.props.factory(constants.fsm.actions.mine);
                    return [
                        <mine2.component showEntry={false} factory={this.props.factory} 
                            onInput={this.onInput} {...functions.propKid(I_MINE)}/>
                    ]
                case S_IN:
                default:
                    let lounge = this.props.factory('lounge');
                    let mine = this.props.factory(constants.fsm.actions.mine);
                    return [
                        <div>
                            {this.renderShip()}
                        </div>,
                        <div>
                            inside control room
                            <lounge.component showEntry={true} factory={this.props.factory} 
                            onInput={this.onInput} {...functions.propKid(I_LOUNGE)}/>
                            <mine.component showEntry={true} factory={this.props.factory} 
                            onInput={this.onInput} {...functions.propKid(I_MINE)}/>
                            {/* <Button vId={I_ENTRY_1} onInput={this.onInput} text={'inside control'}/> */}
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
            setZone, setFSMState, editUserAns
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
