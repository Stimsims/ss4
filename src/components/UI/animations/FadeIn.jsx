import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './styles.css';

class Trans extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <ReactCSSTransitionGroup
            transitionName="fade-in"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {this.props.children}
        </ReactCSSTransitionGroup>
      );
    }
}

export default Trans;