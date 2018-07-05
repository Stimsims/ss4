
import React from 'react'
import { withRouteData, Link } from 'react-static'

class Games extends React.Component{
    constructor(props){
        super(props);
        // console.log("indi post");
        // console.log(this.props);
    }
    render(){
        return (
            <div>
              <h2>Posts</h2>
            </div>
          )
    }
}

export default withRouteData(Games);
