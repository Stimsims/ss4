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
            asteroidSample: 'asteroidSample'
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
        stock: 'stock'
    },
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