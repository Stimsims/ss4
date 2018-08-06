import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';
//import './styles.css';

class Trans extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
          <Fade>
            <ReactCSSTransitionGroup
                transitionName="fade-in"
                transitionAppear={true}
                transitionEnter={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {this.props.children}
            </ReactCSSTransitionGroup>
        </Fade>
      );
    }
}

export default Trans;

//enter controls page transitions
const Fade = styled.div`
    span{
    }
    span div{
    }

    span .fade-in-enter{
        opacity: 0;
    }
    span .fade-in-enter.fade-in-enter-active{
        opacity: 1;
        transition: all 1s;
    }

    span .fade-in-appear{
        opacity: 0;
    }
    span .fade-in-appear.fade-in-appear-active{
        opacity: 1;
        transition: all 1s;
    }
    span .fade-in-leave{
        opacity: 1s;
    }
    span .fade-in-leave-active{
        opacity: 0;
        transition: all 1s;
    }

`
/*












    span .fade-in-appear{
        opacity: 0;
    }
    span .fade-in-appear-active{
        opacity: 1;
        
    }



    span .fade-in-leave{
        opacity: 1s;
    }
    span .fade-in-leave-active{
        opacity: 0;
    }


      .fade-enter{
        opacity: 0;
        transition: all 300ms;
      }
      .fade-enter-active{
        opacity: 1;
        transition: all 300ms;
      }
      .fade-leave{
        opacity: 1;
        transition: all 300ms;
      }
      .fade-leave-active{
        opacity: 0;
        transition: all 300ms;
      }
*/