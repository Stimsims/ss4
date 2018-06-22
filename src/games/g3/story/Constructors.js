


//import {bindActionCreators} from 'redux';


const guid = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators({
//             changeHealth,
//             setComponentState,
//             setComponentNodeId
//         }, dispatch)
//     }
// }
// function setLocation(payload){
//     return{
//         type: 'SET_LOCATION',
//         payload
//     }
// }
// const mapActions = (actions) => (dispatch) => {
//     return bindActionCreators({
//         ...actions
//     }, dispatch)
// }

// const mapSingletonState = (type, id) => (state) => {
//     return {
//         mystate: state[type][id]
//     }
// }
const map = (type) => (state, props) => {
    console.log("mapState ");
    console.log(props);
    return {
        mystate: state[type][props.id]
    }
}
export const mapState = (type, fsm) => {
    console.log("mapSingletontoprops " + type);
    return Object.assign({
        type,
        getMapState: map(type),
    }, fsm);
}

// export const mapManyToProps = (type, fsm) => {
//     return Object.assign({
//         type,
//         getMapState: mapDynamicState(type),
//         //getDispatch: mapActions(actions)
//     }, fsm);
// }

