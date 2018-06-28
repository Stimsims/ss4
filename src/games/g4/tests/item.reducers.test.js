import * as items from './../story/items/reducer.js';


describe('item reducer', () => {
    it('should edit an item with a type and an id', () => {
        let start = {
            testtype:{
                testid:{
                    testprop: 1
                }
            }
        }
        expect(items.reducer(start, {
            type: 'EDIT_ITEM',
            payload: {
                type: 'testtype',
                id: 'testid', 
                props: {testprop:2}
            }
        })
        ).toEqual({
            testtype:{
                testid:{
                    testprop: 2
                }
            }
        })
    })
    it('should edit an item with only a type, no id', () => {
        let start = {
            testtype:{
                testprop: 1
            }
        }
        expect(items.reducer(start, {
            type: 'EDIT_ITEM',
            payload: {
                type: 'testtype',
                props: {testprop:2}
            }
        })
        ).toEqual({
            testtype:{
                testprop: 2
            }
        })
    })
})



/*
export function editItem(type, id, props){
    console.log("action editItem type " + type + " id " + id);
    return {
        type: `EDIT_ITEM`,
        payload:{
            type, id, props
        }
    }
}
        case 'EDIT_ITEM':
            //if id is null, assume item is top level, if not, search for id
            let edit = action.payload.id? state[action.payload.type][action.payload.id]:state[action.payload.type];
            let nEdit = {
                ...edit,
                ...action.payload.props
            }
            if(action.payload.id){
                //if has an id, make edit a value of that id key
                nEdit = {
                    [action.payload.id]: nEdit
                }
            }
            // nEdit = {
            //     [action.payload.type]: nEdit
            // }
            console.log("edit item = ", nEdit);
            return{
                ...state,
                [action.payload.type]:{
                    ...state[action.payload.type],
                    ...nEdit
                }
            }
*/