import React from 'react'
import { Link } from 'react-static'
import {connect} from 'react-redux';
import ReactGA from 'react-ga';
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
    console.log("lost, componentDidUpdate, gapi? " + this.props.gapi.gapiReady + " state: ", this.state);
    if(!this.state.errorSent && this.props.gapi.gapiReady){
      ReactGA.event({
          category: 'Error',
          action: '404',
          label: `${this.props.match.url}`
      });
      this.setState({
        errorSent:true
      })
    }
  }
  render(){
    return (
      <div>
          <p>That page doesn't exist. We have made a note of the problem.</p>
          <p>In the meantime, here are some pages that definitely exist</p>
          <Link to={`/`}>Home</Link>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gapi: state.gapi
  }
}

export default connect(mapStateToProps)(Lost);