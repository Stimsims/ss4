
import React from 'react';
import './styles.css';
import styled from 'styled-components';

export default class Switch extends React.Component {

    constructor ( props ) {
        super( props );
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			isChecked: props.isChecked
		}
    }
	
	componentWillMount () {
		this.setState( { isChecked: this.props.isChecked } );
	}
	componentDidUpdate(prevProps){
		if(prevProps.isChecked !== this.props.isChecked && this.props.isChecked !== this.state.isChecked){
			this.setState({
				isChecked: this.props.isChecked
			})
		}
	}

	handleChange(e){
		//console.log('switch handleChange ' + e.target.value, e);
		this.props.onInput(this.props.id, !this.state.isChecked);
		this.setState( { isChecked: !this.state.isChecked } );
	}

    render () {
		console.log(`switch id ${this.props.id} isChecked ${this.state.isChecked}`);
        return(
            <View width={'94px'} height={20}>
                <div className="switch-container">
                    <label>
                        <input checked={ this.state.isChecked } onChange={ this.handleChange } className="switch" type="checkbox" />
                        <div>
                            {/* <span><g className="icon icon-toolbar grid-view"></g></span>
                            <span><g className="icon icon-toolbar ticket-view"></g></span> */}
                            <div></div>
                        </div>
                    </label>
                </div>
            </View>
        );
    }

}
/* .switch-container {
	position: absolute;
	top: 50%; left: 50%;
	-webkit-transform: translate3d( -50%, -50%, 0 );
	transform: translate3d( -50%, -50%, 0 );
} */
const View = styled.span`
.switch-container{
    position: relative;
}

input[type="checkbox"].switch  {
	position: absolute;
	opacity: 0;
}

input[type="checkbox"].switch + div {
	vertical-align: middle;
	width: 40px;
	height: ${props=>props.height*0.5}px;
	border-radius: 999px;
	background-color: #00B0F2;
	-webkit-transition-duration: .4s;
	transition-duration: .4s;
	-webkit-transition-property: background-color, box-shadow;
	transition-property: background-color, box-shadow;
	cursor: pointer;
}

input[type="checkbox"].switch + div span {
	position: absolute;
    font-size: 1.6rem;
    color: white;
    margin-top: 12px;
}

input[type="checkbox"].switch + div span:nth-child( 1 ) {
    margin-left: 15px;
}

input[type="checkbox"].switch + div span:nth-child( 2 ) {
    margin-left: 55px;
}

input[type="checkbox"].switch:checked + div {
	width: ${props=>props.height + props.height + 13 /* the button circle height + the translation width */}px;
	background-position: 0 0;
	background-color: #3b89ec;
}

input[type="checkbox"].switch + div {
	width: ${props=>props.height + props.height + 13}px;
	height: ${props=>props.height + 8}px;
}


input[type="checkbox"].switch:checked + div {
	background-color: #57BB00;
}

input[type="checkbox"].switch + div > div {
	float: left;
	width: ${props=>props.height + 6}px; height: ${props=>props.height + 6}px;
	border-radius: inherit;
	background: #ffffff;
	-webkit-transition-timing-function: cubic-bezier(1,0,0,1);
	transition-timing-function: cubic-bezier(1,0,0,1);
	-webkit-transition-duration: 0.4s;
	transition-duration: 0.4s;
	-webkit-transition-property: transform, background-color;
	transition-property: transform, background-color;
	pointer-events: none;
	margin-top: 1px;
	margin-left: 1px;
}

input[type="checkbox"].switch:checked + div > div {
	-webkit-transform: translate3d(20px, 0, 0);
	transform: translate3d(20px, 0, 0);
	background-color: #ffffff;
}

input[type="checkbox"].bigswitch.switch + div > div {
	width: ${props=>props.height + 4}px;
	height: ${props=>props.height + 4}px;
	margin-top: 1px;
}


input[type="checkbox"].switch:checked + div > div {
	-webkit-transform: translate3d(${props=>props.height + 6}px, 0, 0);
	transform: translate3d(${props=>props.height + 6}px, 0, 0);
}


`
 
// React.render( <Switch isChecked={ true } />, document.getElementById( "page" ) );
