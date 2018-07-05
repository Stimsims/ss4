import React from 'react';

export const constants = {
    fsm: {
        keys:{
            state: 'state',
            item: 'itemId',
            itemType:'itemType'
        },
        zones:{
            lounge: 'lounge',
            control: 'control'
        },
        actions:{
            mine: 'mine',
            inventory: 'inventory'
        },
        questions:{
            idElem: 'idElem'
        },
        items:{
            asteroidSample: 'asteroidSample' //important that items and item template tag remain the same
        }
    },
    sim:{
        engine:{
            ok:'ok',
            overheat: 'overheat',
            exploded:'explo'
        }
    },
    IO:{
        vId: 'vId',
        kId: 'kId'
    },
    items:{
        asteroidSample:'asteroidSample',
        element: 'element',
        weight: 'weight',
        stock: 'stock',
        ship: 'ship',
        engine: 'engine',
        hull: 'hull',
        sequence: 'sequence'
    },
    relations:{
        contains: 'contains'
    },
    elements:{
        iron: {
            shc: 20
        },
        copper: {
            shc: 10
        },
        potassium: {
            shc:30
        },
        chromium: {
            shc: 10
        }
    }
}

//export default constants;
export const functions = {
    propKid: (value) => {
        return {kId: value}
    },
    componentTag: (tag, props) => {
        return <tag {...props}/>
    }
}


export const expressions ={
    'arithmeticSequence':{
        id:'arithmeticSequence',
        name: 'the arithmetic sequence',
        desc:'Finds the nth term of a sequence that starts at a and increments by d',
        ex:'a1+(n-1)d',
        exAlt:[
            '3*(x+1)^3+8*(x+1)^2+u',
            'sin(x)/cos(x)',
            '(x+1)*cos(x+1)'
        ],
        next: 'a(n-1)+d'
    }
}

/*
const expression = 'a1+(n-1)d'
const altExpressions = [
    '3*(x+1)^3+8*(x+1)^2+u',
    'sin(x)/cos(x)',
    '(x+1)*cos(x+1)'
]

*/