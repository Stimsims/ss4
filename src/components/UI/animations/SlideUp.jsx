import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import './styles.css';
import styled from 'styled-components';

class Trans extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <Container>
            <ReactCSSTransitionGroup
                transitionName="slide-up"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                {this.props.children}
            </ReactCSSTransitionGroup>
        </Container>
      );
    }
}

export default Trans;

const Container = styled.span`
    .slide-up-enter{
        transform: translate(0px, 0px);
        opacity: 0.1;
    }
    .slide-up-enter.slide-up-enter-active {
        transform: translate(0px, 100vh);
        transition: all 1s ease-out;
        opacity: 0.1;
    }

    .slide-up-leave {
        transform: translate(0px, 100vh);
    }

    .slide-up-leave.slide-up-leave-active {
        transform: translate(0px, 0px);
        transition:  all 1s ease-out;
    }

    .slide-up-appear {
        transform: translate(0px, 100vh);
        transition:  all 1s ease-out;
    }
    .slide-up-appear.slide-up-appear-active {
        transform: translate(0px, 0vh);
        transition:  all 1s ease-out;
    }
    .slide-up-appear-active a div{
        transform: translate(0px, 0vh);
        transition:  all 1s ease-out;
    }
    .slide-up-appear a div{
        transition:  all 1s ease-out;
        transform: translate(0px, 100vh);
    }
`
/*
    .slide-up-appear-active a div{
        transition: all 1s ease-out;
        transform: rotate(0deg);
    }
    .slide-up-appear a div{
        transition: all 1s ease-out;
        transform: rotate(90deg);
    }
            &.slide-up-appear-active {
            transform: translate(0px, 0px);
        }
*/