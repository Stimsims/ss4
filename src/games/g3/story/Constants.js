export const constants = {
    input:{
        kId: 'kId',
        vId: 'vId'
    },
    store:{
        state: 'state'
    },
    names:{
        lounge: 'lounge'
    },
    types:{
        zones: 'zones',
        actions: 'actions',
        questions: 'questions'
    },
    zones:{
        lounge:'lounge',
        control: 'control'
    },
    questions:{
        read: 'read'
    },
    actions:{
        mine: 'mine',
        inventory: 'inventory'
    },
    read:{
        q1:'q1'
    },
    mine:{
        samples: 'samples'
    },
    inventory:{
        items: 'items'
    },
    logTypes:{
        action: 'action',
        answer: 'answer'
    }
}

export const messages = {
    changeZone: (id, to) => {
            return {
                [constants.input.vId]: id,
                changeFrom: (from) => {
                    return {
                        to,
                        from
                    }
            }
        }
    },
    toFSMState: (id, state) => {
        return {id, state}
    },
    zone: (id) => {
        return {
            [constants.input.vId]: id
        }
    },
    action: (id) => {
        return {
            [constants.input.vId]: id
        }
    },
    output: (id, answers) => {
        return {
            [constants.input.vId]: id,
            ...answers
        }
    }
}
