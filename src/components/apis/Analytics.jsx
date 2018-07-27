import React from 'react';
import ReactGA from 'react-ga';

class Analytics extends React.Component{
    constructor(props){
        super(props);
       // console.log("analytics constructor");
    }
    componentDidMount(){
        //console.log("init react-ga");
        ReactGA.initialize('UA-59498836-3', { debug: true });
       // ReactGA.pageview(window.location.pathname + window.location.search);
    }
    render(){
        return(
            null
        )
    }
}

export default Analytics;