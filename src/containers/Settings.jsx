import React from 'react';
import { withRouteData, Link, withSiteData } from 'react-static'

class Settings extends React.Component{
    render(){
        return (
            <div>
                <p>Settings</p>
                <div id={'privacy'} style={{width: '100%', height: '500px'}}>
                    privacy
                </div>
            </div>
        )
    }
}

Settings.displayName='Settings';
export default withRouteData(Settings);