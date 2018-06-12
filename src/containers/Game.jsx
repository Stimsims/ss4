
import React from 'react'
import { withRouteData, Link } from 'react-static'

class Games extends React.Component{
    constructor(props){
        super(props);
        console.log("indi game");
        console.log(this.props);
    }
    render(){
        return (
            <div>
              <h2>indi game</h2>
            </div>
          )
    }
}

export default withRouteData(Games);
