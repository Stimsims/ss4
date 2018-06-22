import {constants} from './../Constants.js'
  
export const reducer = (
    state = {
        read:{
            type: constants.types.questions,
            id: 'read',
            state: 0,
            scores:{

            }
        }
    }, 
    action = {}) => {
        switch (action.type) {
            case 'SET_SCORE':
                console.log("reducer set score, scores: " + action.payload.id);
                console.log(action.payload.scores)
                let s =  updateScores(action.payload.scores, state[action.payload.id].scores)
                return {
                    ...state,
                    [action.payload.id]:{
                        ...state[action.payload.id],
                        scores: s
                    }
                }
            case 'SET_FSM_STATE':
                return {
                    ...state,
                    [action.payload.id]: {
                        ...state[action.payload.id],
                        state: action.payload.state
                    }
                };
            default:
                return state
        }
    }
    
function updateScores(scores, aggregate){
    //for each question add total and actual score
    console.log("update scores");
    console.log(scores);
    console.log(aggregate);
    let o = {...aggregate}
    for (var key in scores) {
        if (scores.hasOwnProperty(key)) {
            //console.log(key + " -> " + p[key]);
            console.log("adding " + key + ":" + scores[key]);
            o[key] = {
                total: aggregate[key]? aggregate[key].total + 1:1,
                score: aggregate[key]? aggregate[key].score + scores[key].score:scores[key].score
            }
        }
    }
    console.log("score aggregate");
    console.log(o);
    return o;
}  
    
export function setScore(id, scores){
    return{
        type: 'SET_SCORE',
        payload: {
            id,
            scores
        }
    }
}

export function setFSMState(id, state){
    return{
        type: 'SET_FSM_STATE',
        payload: {
            id, state
        }
    }
}
