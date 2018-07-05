import React from 'react';

export const store={
    zLounge: 'zLounge',
    zControl: 'zControl',
    iRead: 'iRead',
    iSample: 'iSample',
    rContains: 'rContains',
    fsm: 'fsm'
}

export const constants = {
    kId: 'kId',
    vId: 'vId',
    entry: 'entry',
}

export const units = {
    g: 'grams',
    kg: 'kilos'
}

export const decorators={
    setEntry: (entry) => {
        return {
            [constants.entry]: entry
        }
    },
    getComponent: (factory, key, entry, input, kId) => {
        let component = factory(key);
        return <component.component factory={factory} entry={entry} onInput={input} kId={kId} />
    }
}

export const sample = {
    elements: ['iron', 'chromium', 'cobalt', 'silver', 'gold']
}

/*
        return {
            component,
            props:{
                factory={factory}, entry={entry}, onInput={input}
            }
        }
*/