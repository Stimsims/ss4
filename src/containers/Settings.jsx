import React from 'react';
import { withRouteData, Link, withSiteData } from 'react-static'
import Switch from './../components/UI/elements/Switch/index.jsx';
import Text from './../components/UI/elements/Text.jsx';
import TextBox from './../components/UI/elements/TextBox.jsx';
import {setSettings} from './../components/game/SettingsReducer.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import theme from './../components/UI/theme.js';

const DAYNIGHT = 'daynight';
class Settings extends React.Component{
	constructor(props){
		super(props);
		this.onInput = this.onInput.bind(this);
	}
	 onInput(id, value){
        // console.log(`Settings onInput id ${id} value ${value}`, value);
         //this.props.setSettings()
         if(id === DAYNIGHT){
             this.props.setSettings(id, value);
             //theme.setTheme(value?'day':'night');
         }
	 }
    render(){
        return (
            <div className="hello">
                <div className="hi" style={{padding: '10px'}}>
                     <TextBox>
                        <Text tag={'p'} text={'Day/Night mode:'} display={'inline-block'} padding={'5px 0px'} colorKey={'textInverted'} />
                        <span style={{position: 'absolute', top: '50%', right:'10px', transform: 'translateY(-50%)'}}>
                            <Switch id={DAYNIGHT} isChecked={this.props.daynight} onInput={this.onInput} />
                        </span>
                    </TextBox>
                </div>
            </div>
        )
    }
}

Settings.displayName='Settings';
//export default Settings;
const mapStateToProps = (state) => {
    return {
        daynight: state.settings[DAYNIGHT]
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSettings
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings)
