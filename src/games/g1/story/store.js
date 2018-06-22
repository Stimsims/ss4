export const reducer = (
    state = {
    }, 
    action = {}) => {
        console.log("updating component state");
        console.log(action);
        switch (action.type) {
            case 'COMPONENT_STATE':
                return {
                    ...state,
                    [action.payload.id]: action.payload.state
                }
            case 'COMPONENT_NODE_ID':
                return {
                    ...state,
                    [action.payload.id]: {
                        ...state[action.payload.id],
                        nodeId: action.payload.nodeId
                    }
                }
            default:
                return state
        }
    }

    
    
export function setComponentState(payload){
    console.log("setcomponentstate")
    console.log(payload);
    return{
        type: 'COMPONENT_STATE',
        payload
    }
}
   
export function setComponentNodeId(payload){
    console.log("setComponentNodeId")
    console.log(payload);
    return{
        type: 'COMPONENT_NODE_ID',
        payload
    }
}