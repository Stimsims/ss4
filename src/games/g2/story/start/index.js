import {Story} from './../Story.js';
import * as ViewBuilder from './../../components/Views';

export const key = 'start';

function getId(){
    return key;
}

class Start extends Story{
    mapStateToProps(state, props){
        return {
            mystate: state[props.id]
        }
    }
}


export function getView(){
    return ViewBuilder.getView(getId(), Start);
};