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
    relations:{
        contains: 'contains'
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