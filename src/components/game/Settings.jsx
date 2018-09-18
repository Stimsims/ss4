import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import IconButton from './../UI/elements/IconButton.jsx';
import TextBox from './../UI/elements/TextBox.jsx';
import Text from './../UI/elements/Text.jsx';
import styled from 'styled-components';
import Switch from './../UI/elements/Switch/index.jsx';
import Checkbox from './../UI/elements/Checkbox/index.jsx';
import Slider from './../UI/elements/Slider/index.jsx';
import {setSettings} from './SettingsReducer.js';

const defaultSettings = [
    {
        type: 'switch',
        key: 'hints',
        default: 1,
        getValue: (value) => {
            if(value){
                return 'hints on'
            }
            return 'hints off'
        }
    },
    {
        type: 'range',
        key: 'volume',
        default: 30,
        values:[
            0,
            100
        ],
        getValue: (value) => {
            return `volume ${value}`;
        } 
    },
    {
        type: 'options',
        key: 'font',
        options: 3,
        default: 1,
        text: 'font size',
        options:[
            'small', 'medium', 'large'
        ]
    }
]
//types of input - switch on/off
//range - min/max
//discrete options - small, medium, large
//will get description of settings from game
class Settings extends React.Component{
    constructor(props){
        super(props);
        let inputs = {};
        defaultSettings.map(d => {
            inputs[d.key] = d.default;
        })
        console.log('Settings constructor redux length = ' + (Object.keys(props.settings).length));
        this.state = {
            open: false,
            settings: Object.keys(props.settings).length > 0? props.settings:defaultSettings,
            inputs
        }
        console.log('Settings constructor props', props);
        console.log('Settings constructor state', this.state);
        this.handleInput = this.handleInput.bind(this);
        this.onClose = this.onClose.bind(this);
        props.registerMenuItem([
            {
                key: 'settings',
                position: 'right',
                component: <IconButton round={true} icon="settings" text="settings" onInput={()=>{
                    this.setState({
                        open: true
                    })
                }} />
            }
        ])
    }
    handleInput(id, value){
        console.log(`settings handleInput ${id} value ${value}`,this.props.settings);
        this.setState({
            inputs: {
                ...this.state.inputs,
                [id]: value
            }
        })
        this.props.setSettings(id, value);
    }
    renderSettings(){
        return this.state.settings.map(s => {
            switch(s.type){
                case 'switch':
                    return <TextBox>
                        <Container>
                            <Left><Text tag={'p'} display={'inline'} padding={'10px 0px'}
                                text={s.getValue(this.state.inputs[s.key])} 
                            /></Left>
                            <Right><Switch id={s.key} onInput={this.handleInput} isChecked /></Right>
                        </Container>
                    </TextBox>
                case 'range':
                    return <TextBox>
                        <Slider id={s.key} label={s.key} value={s.default} onInput={this.handleInput}/>
                    </TextBox>
                case 'options':
                    return <TextBox>
                        <p>{s.text}</p>
                        <Checkbox id={s.key} options={s.options} onInput={this.handleInput} 
                            selected={this.state.inputs[s.key]} multiple={false} />
                    </TextBox>
            }
        })
    }
    onClose(){
        console.log('settings onClose ' + this.state.open);
        this.setState({
            open: false
        })
    }
    render(){
        if(this.state.open){
            return <Wrapper>
                <Bar>
                    <IconButton icon={'up'} round onInput={this.onClose}/>
                    <h3 style={{display: 'inline'}}>Settings</h3>
                </Bar>
                <div style={{padding: '10px'}}>
                    {this.renderSettings()}
                </div>
            </Wrapper>
        }else{
            return null;
        }
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSettings
    }, dispatch)
}
const mapStateToProps = (state) => {
    return {
        settings: state.settings
    }
}

Settings.displayName = 'Settings';
export default connect(mapStateToProps, mapDispatchToProps)(Settings);


const Wrapper = styled.div`
    position: fixed;
    left:0; right:0; top:0; bottom: 0;
    z-index: 100;
    background-color: ${props => props.theme[props.theme.theme].neutral};
`

const Bar = styled.div`
    background-color:red;
    height: ${props => props.theme[props.theme.theme].gameMenuHeight};
    position: relative;
`
const Container = styled.div`
    display: flex;
`
const Right = styled.div`
    align-self: flex-end;
`
const Left = styled.div`
    align-self: flex-start;
    flex: 1;
`
    // mapSettings(children){
    //     let wrapped = React.Children.map(children, child =>
    //         React.cloneElement(child, { doSomething: 'hello' }));
    //     console.log('mapSettings wrapped', wrapped);
    //     return wrapped;
    // }
    // render(){
    //     console.log('Settings render called open? ' + this.state.open);
    //     if(this.state.open){
    //         return (
    //             <div>
    //                 Settings
    //             </div>
    //         )
    //     }else{
    //         return <div>
    //             {this.mapSettings(this.props.children)}
    //         </div>
    //     }
    // }