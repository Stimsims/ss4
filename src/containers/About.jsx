
import React from 'react'
import { connect } from 'react-redux'
import Menu from './../components/layout/MainMenu.jsx';
import {withSiteData} from 'react-static';

// /////////////////////////////////////////////////////////
// Redux components
// From http://redux.js.org/docs/basics/UsageWithReact.html
// Display component
const Counter = ({ count, increment, reset }) => (
  <div>
    <p>Value: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
  </div>
)
// Connexion with redux
// const CounterConnected = connect(
//   ({ counter: { count } }) => ({ count }),
//   dispatch => ({
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     reset: () => dispatch({ type: 'RESET' }),
//   }),
// )(Counter)

// const mapStateToProps = (state) => {
//   console.log("mapStateToProps");
//   console.log(state);
//   return {
//     count: state.counter
//   }
// }

const mapStateToProps = ({ counter: { count } }) => ({ count });

// const mapDispatchToProps = (dispatch) => {
//   console.log("mapDispatchToProps");
//   console.log(dispatch);
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     reset: () => dispatch({ type: 'RESET' }),
//   }
// }
const mapDispatchToProps = dispatch => ({
      increment: () => dispatch({ type: 'INCREMENT' }),
      reset: () => dispatch({ type: 'RESET' }),
    })
const CounterConnected = connect(mapStateToProps, mapDispatchToProps)(Counter);

// /////////////////////////////////////////////////////////
// Actual container
class About extends React.Component{
  constructor(props){
    super(props);
   // console.log("about constructor", props);
  }
  render(){
    return (
      <div>
        {/* <Menu /> */}
        <h1>This is what we're all about.1</h1>
        <p>
          React, static sites, performance, speed. It's the stuff that makes us
          tick.
        </p>
        <h2>Here is a redux counter:</h2>
        {/* <CounterConnected /> */}
      </div>
    )
  }
}

export default withSiteData(About)


// export default withSiteData((data) => {
//   console.log("about fn", data);
//   return(
//     <div>
//       <h1>This is what we're all about.1</h1>
//       <p>
//       React, static sites, performance, speed. It's the stuff that makes us
//       tick.
//       </p>
//       <h2>Here is a redux counter:</h2>
//   </div>
//   )
// })
//   console.log("about fn", data);
//   return(

// )}
// )