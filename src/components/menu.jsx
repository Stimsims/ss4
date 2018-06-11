import React from 'react';
import { Link } from 'react-static'

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav>
                <Link exact to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        )
    }
}

export default Menu;