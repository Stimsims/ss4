import React from 'react';
import ReactGA from 'react-ga';
import {setCookie, getCookie, checkCookie} from './../../utilities/cookies.js';
import {Link} from 'react-static';
import Modal from './../UI/elements/Modal.jsx';
import Text from './../UI/elements/Text.jsx';
import Button from './../UI/elements/Button.jsx';
import SlideSide from './../UI/animations/SlideSide.jsx';

const cookieConsent = 'consentCookie';
const consented = 'consented';


class Analytics extends React.Component{
    constructor(props){
        super(props);
       // console.log("analytics constructor");
       this.onConsent = this.onConsent.bind(this);
       this.state={
           getConsent: false
       }
    }

    componentDidMount(){
        //console.log("init react-ga");
        //check if user has consented to cookies, if not, display modal
        ReactGA.initialize('UA-59498836-3', { 
            debug: true,
            gaOptions: {
                anonymizeIp: true
            }
        });
       // ReactGA.pageview(window.location.pathname + window.location.search);
       // <script src="//www.google-analytics.com/cx/api.js"></script>
       if (typeof document !== 'undefined') {
           console.log("getting cookie", getCookie);
            let consent = getCookie(cookieConsent);
            console.log("has user consented? " + consent + " equal to " + consented + "? " + consented.localeCompare(consent), consented);
            if(consented.localeCompare(consent) !== 0){
                this.setState({
                    getConsent: true
                })
            }
       }

    }
    onConsent(){
        //(cname, cvalue, exdays) {
        console.log("onConsent user has consented, setting cookie")
        setCookie(cookieConsent, consented, 1);
        this.setState({
            getConsent: false
        })
    }
    renderModal(){
        let views = [];
        if(this.state.getConsent){
            views.push(                <Modal>
                <Text tag={'p'} text={'This site uses cookies to collect annonymized data on how you use the site. '}/>
                <Link to={'/settings#privacy'}>View privacy policy</Link>
                <div style={{width: '100%'}}><Button style={{float:'right'}} onInput={this.onConsent}>Okay</Button></div>
            </Modal>)
        }
        return views;
    }
    render(){
        
        return (
            <SlideSide offset={0} duration={1000} childDelay={150}>
                {this.renderModal()}
            </SlideSide>
        )
    }
}

export default Analytics;