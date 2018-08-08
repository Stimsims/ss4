import React from 'react';
import { withRouteData, Link, withSiteData } from 'react-static'
import Switch from './../components/UI/elements/Switch/index.jsx';
import Text from './../components/UI/elements/Text.jsx';
import TextBox from './../components/UI/elements/TextBox.jsx';

class Settings extends React.Component{
    render(){
        return (
            <div className="hello">
                <div className="hi" style={{padding: '10px'}}>
                    <TextBox>
                        <Text tag={'p'} text={'Font size:'} display={'inline-block'} padding={'5px 0px'} colorKey={'textInverted'} />
                        <span style={{position: 'absolute', top: '50%', right:'10px', transform: 'translateY(-50%)'}}>
                            <Switch />
                        </span>
                    </TextBox>
                    <TextBox id={'privacy'}>
                        <Text tag={'p'} text={'Privacy'} display={'block'} colorKey={'textInverted'} />
                        <Text tag={'p'} text={'A statement about Privacy'} align={'left'} display={'block'} colorKey={'textInverted'} />
                    </TextBox>
                </div>
            </div>
        )
    }
}

Settings.displayName='Settings';
export default Settings;
