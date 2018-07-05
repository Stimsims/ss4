
//put a nerdamer fn in function,
//when being parsed or regenerated, intercept all sequences and pass to nerdamer
import {constants, expressions} from './../Constants.js';
//first expression is the correct one
// const expression = 'a1+(n-1)d'
// const altExpressions = [
//     '3*(x+1)^3+8*(x+1)^2+u',
//     'sin(x)/cos(x)',
//     '(x+1)*cos(x+1)'
// ]

export const create = () => {
    let vA1 = Math.floor(Math.random()*20) - 10;
    let vD = Math.floor(Math.random()*5) + 2;
    return{
        id: 'arithmetic',
        type: constants.items.sequence,
        ex: expressions.arithmeticSequence,
        sequence: 'arithmetic',
        a1: vA1,
        d: vD,
        terms: [vA1, vA1 + vD],
        user:{
            sequence: null,
            expression: null,
            a1: null,
            d: null
        }
    }
}


/*
export const createSample = () => {
    let material = getRandomItem(materials);
    let id = guid();
    return {
        id,
        type: constants.items.asteroidSample,
        element: material,
        weight: 10*Math.random() + 3,
        user:{
            element: null,
            weight: null
        }
    }
}

*/