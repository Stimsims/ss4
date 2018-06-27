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
        hull: 'hull'
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
