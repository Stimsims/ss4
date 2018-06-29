import React from 'react';
import { Link, withSiteData } from 'react-static'
import styled from 'styled-components';
import Icon from './../UI/elements/IconButton.jsx';
import SignInUi from './../apis/SignInUi.jsx';

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
                <SignInUi />
            </Bar>
        )
    }
}

export default withSiteData(Menu);

const Bar = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color:red;
`