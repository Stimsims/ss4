
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static'
import Container from './../components/UI/elements/Container.jsx';
import Text from './../components/UI/elements/Text.jsx';
import styled from 'styled-components';
import Translate from './../components/UI/animations/Translate.jsx';
import PostItem from './../components/layout/PostItem.jsx';
import Trends from './../components/Trends.jsx';

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    renderGraph(){
      console.log("home component renderGraph animationState " + this.props.animationState);
      if(this.props.animationState === 1){
            return <Trends/>
      }
      return null;
    }
    render(){
        return (
          <div>
            <Container fixed={true} colorKey={'neutral'} z={-1000} padding={'10px 0px 100px 0px'}>
              <Text tag={'h3'} display={'block'} colorKey={'textInverted'} text={'Google Search Trends for Subjects'} />
              <Container fixed={false} width={'100%'} height={'90%'} >
                {this.renderGraph()}
              </Container>
            </Container>
            <Container fixed={true} color={'transparent'} z={1}>
                <PostBox>
                  <Message>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  </Message>
                  <PostWrapper>
                    <Translate items={this.props.posts} itemKey={PostItem.key} itemId={'id'} 
                            component={PostItem.component}  y={{start: -800, enter: 0, unit: 'px'}}/>
                  </PostWrapper>
                </PostBox>
            </Container>
        </div>
        )
    }
}

export default withRouteData(Home);
const Message = styled.h4`
  font-size:1em;
  color: rgb(255,255,255,1);
  width:100%;
  padding: 10px;
  padding-bottom:0px;

`
const PostWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
`
const PostBox = styled.div`
  width: 50%;
  background-color: rgb(255,255,255,0.5);
  margin-top: 100px;
  margin-left: 55px;

`