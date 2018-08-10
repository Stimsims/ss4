import React from 'react';
import IconButton from './../UI/elements/IconButton.jsx';

export default class Settings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        props.registerMenuItem([
            {
                key: 'settings',
                position: 'right',
                component: <IconButton round={true} icon="settings" onInput={()=>{
                    this.setState({
                        open: true
                    })
                }} />
            }
        ])
    }
    render(){
        if(this.state.open){
            return (
                <div>
                    Settings
                </div>
            )
        }else{
            return this.props.children;
        }
    }
}