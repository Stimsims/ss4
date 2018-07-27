import React from 'react'
import { withRouteData, Link } from 'react-static'
import {connect} from 'react-redux';
import LogError from 'LogError';
// import ReactGA from 'react-ga';
//import My404 from './../components/layout/404.jsx';

//undecorated - match, history, location
//does not work with route data - hypoth: route data relates to making child posts of something

class Lost extends React.Component{
  constructor(props){
    super(props);
    console.log("Lost 404 constructor", props);
    this.sendError = this.sendError.bind(this);
    this.state = {
      errorSent: false
    }
  }
  componentDidMount(){
    this.sendError();
  }
  componentDidUpdate(){
    this.sendError();
  }
  sendError(){
    console.log("lost, componentDidUpdate, gapi? " + this.props.gapi.gapiReady + " state: ", this.state
     + " anim: " + this.props.animationState + " url " + this.props.history.location.pathname);
    if(!this.state.errorSent && this.props.gapi.gapiReady && this.props.animationState === 1){
      // ReactGA.event({
      //     category: 'Error',
      //     action: '404',
      //     label: `${this.props.match.url}`
      // });
      try{
        console.log("sending 404 error");
        
        throw new Error(`404 page not found, ${this.props.history.location.pathname}`);
        console.log("sent");
        this.setState({
          errorSent:true
        })
      }catch(e){
        console.log("404 page not found catch " + this.props.history.location.pathname, e);
        LogError(e);
       // throw e;
      }
      // finally{
      //   console.log("sending 404 error finally triggered")
      //   this.setState({
      //     errorSent:true
      //   })
      // }

    }
  }
  render(){
    return (
      <div>
          <p>That page doesn't exist. The error has been logged.</p>
          <Link to={`/`}>Go to Home page</Link>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gapi: state.gapi
  }
}


Lost.displayName = '404page';
const connected = connect(mapStateToProps)(Lost);
//const routed = withRouteData(Lost);
export default withRouteData(connected);