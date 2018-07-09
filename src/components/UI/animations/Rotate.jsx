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
                transitionName="rotate"
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
    .rotate-enter{
        transform: rotate(90deg);
        opacity: 0.1;
    }
    .rotate-enter.rotate-enter-active {
        transform: rotate(180deg);
        transition: all 1s ease-out;
        opacity: 0.1;
    }

    .rotate-leave {
        transform: rotate(180deg);
    }

    .rotate-leave.rotate-leave-active {
        transform: rotate(90deg);
        transition:  all 1s ease-out;
    }


    .rotate-appear {
        transform: rotate(180deg);
        transition:  all 1s ease-out;
    }
    .rotate-appear.rotate-appear-active {
        transform: rotate(90deg);
        transition:  all 1s ease-out;
    }

`
