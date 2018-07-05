import * as selectors from './../app/selectors.js';

describe('selects the correct fsm state from the store', () => {
    it('selects the right state for the fsm', () => {
        let id = 'test';
        let start = {
            world:{
                [id]:{
                    fsm:{
                        state: 5,
                        id
                    }
                }
            }
        }
        let result = selectors.selectFSMState(start, id, {});
        expect(result).toEqual({
            state: 5,
            id
        });
    })
    it('selects all items with a contains relationship', () => {
        //contains.id:{type:[ids]}
        let container = 'parent';
        let typeA = 'a';
        let typeB = 'b';
        let child1 = 'c1';
        let child2 = 'c2';
        let start = {
            world:{
                rContains:{
                    [container]:{
                        [typeA]:[],
                        [typeB]: [child1, child2]
                    }
                },
                [typeA]: {
                    
                },
                [typeB]:{
                    [child1]:{id: child1},
                    [child2]:{id: child2}
                }
            }
        }
        let result = selectors.selectContained(start, container);
        expect(result).toEqual({
            [typeA]: [],
            [typeB]: [child1, child2]
        })
    })
})

/*
export const selectFsmState = (state, id, def) => {
    console.log("selectFsm " + id);
    console.log(state);
    let fsm = state.fsm[id];
    return fsm? fsm: def;
}

export const selectContained = (state, id) => {
    let contained = state.relations.contains[id];
    console.log("selectContained " + id);
    console.log(contained);
    if(contained){
        let items = {};
        for (var key in contained) {
            if (contained.hasOwnProperty(key)) {
                console.log(key + " -> " + contained[key]);
                let ids = contained[key];
                let item = ids.map(e => {
                    let i = state.items[key][e];
                    console.log("item " + e);
                    console.log(i);
                    return i;
                })
                console.log("items:");
                console.log(item);
                items[key] = item;
            }
        }
        return items;
    }else{
        return {};
    }
    //return contained?contained:{};
}

*/