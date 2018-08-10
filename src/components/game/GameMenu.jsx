import React from 'react';
import { Link, withSiteData } from 'react-static'
import styled from 'styled-components';
import Icon from './../UI/elements/IconButton.jsx';
import SignInUi from './../apis/SignInUi.jsx';
import Text from './../UI/elements/Text.jsx';
import {connect} from 'react-redux';

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    renderAdditionalMenuItems(position){
        console.log(`rendering ${this.props.menuItems.length} menu items`, this.props.menuItems);
        return this.props.menuItems
        .filter(f => {
            return position === f.position;
        })
        .map(m => {
            console.log("rendering menu item", m);
            return m.component;
        })
    }
    render(){
        //TODO game menu: make right div flexible width
        return(
            <Bar>
                {/* <Text tag={'h1'} position={'absolute'} zIndex={'1'} margin={'0'} width={'100%'} text={this.props.title}/> */}
                <Left>
                    {/* <Link to={'/games'}><Icon icon={"back"} round={true} /></Link> */}
                    {this.renderAdditionalMenuItems('left')} 
                </Left>
                <Right>
                    {this.renderAdditionalMenuItems('right')} 
                    <Icon icon={"settings"} round={true} />
                    {/* <Icon icon={"save"} round={true} />
                    <Icon icon={"cloud"} round={true} /> */}
                    <span style={{display: 'inline-block', position: 'relative', float: 'right'}}>
                    <SignInUi />
                    </span>
                </Right>
            </Bar>
        )
    }
}

export default withSiteData(Menu);
// const mapStateToProps = (state) => {
//     return {
//         gapi: state.gapi
//     }
// }

// Menu.displayName = 'GameMenu';
// export default connect(mapStateToProps)(Menu);


const Bar = styled.div`
    display: flex;
    background-color:red;
    height: 36px;
    position: relative;
`
const Left = styled.div`
    align-self: flex-start;
    display: inline-block;
    flex:1;
    height: 100%;
    z-index=2;
`
const Right = styled.div`
    align-self: flex-end;
    display: block;
    width: auto;
    position: relative;
    height: 100%;
    z-index=2;
`
const Mid = styled.div`
    align-self: center:
    flex:1;
    span h1{
        font-size: 1em
    }
    @media only screen and (min-width: ${props=>props.theme[props.theme.theme].mediaMinWidth}) {
        span h1{
            font-size: 1.5em
        }
    }
`