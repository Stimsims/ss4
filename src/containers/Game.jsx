
import React from 'react'
import { withRouteData, Link } from 'react-static'
import Menu from './../components/layout/GameMenu.jsx';

class Games extends React.Component{
    constructor(props){
        super(props);
        console.log("indi game");
        console.log(this.props);
    }
    render(){
        return (
            <div>
                <Menu />
              <h2>indi game</h2>
            </div>
          )
    }
}

export default withRouteData(Games);
