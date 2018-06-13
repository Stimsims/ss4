import React from 'react';
import { Link, withSiteData } from 'react-static'
import styled from 'styled-components';
import Icon from './../UI/elements/IconButton.jsx';

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Bar>
            <Icon icon={"facebook"} />
            <Icon icon={"twitter"} />
            <Icon icon={"google"} />
            </Bar>
        )
    }
}

export default withSiteData(Menu);

const Bar = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-color:red;
`