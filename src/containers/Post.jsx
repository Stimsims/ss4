
import React from 'react'
import { withRouteData, withSiteData, Link } from 'react-static'
import {connect} from 'react-redux';
//import Menu from './../components/layout/MainMenu.jsx';
import Icon from './../components/UI/elements/IconButton.jsx';
import styled from 'styled-components';
import Tags from './../components/layout/Tags.jsx';
import MyLog from 'MyLog';
import Video from './../components/UI/elements/Video.jsx';
import TextBox from './../components/UI/elements/TextBox.jsx';
import Sizer from './../components/UI/elements/Sizer.jsx';
import Text from './../components/UI/elements/Text.jsx';

class Post extends React.Component{
    constructor(props){
        super(props);
        MyLog('log', "Post constructor", props);
        // if(props.item.content){
        //     props.item.content.map((c, i) => {
        //         if(c.type=="game"){
        //             games[i] = <Talkit tree={c.content}/>
        //         }
        //     })
        // }

        this.state = {
            counter: 0
        }
    }
    componentDidMount(){
        if(this.props.gapiReady){
            //this.renderShare();
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.gapiReady && !prevProps.gapiReady){
           // this.renderShare();
        }
    }
    renderShare(){
        console.log(`post page rendering gapi share post `, this.props);
        // var options = {
        //     contenturl: 'https://plus.google.com/pages/',
        //     contentdeeplinkid: '/pages',
        //     clientid: '640363567361-na8ad159n3hsoa0tugsves1o8n6crsti.apps.googleusercontent.com',
        //     cookiepolicy: 'single_host_origin',
        //     prefilltext: 'omg share this!',
        //     calltoactionlabel: 'CREATE',
        //     calltoactionurl: 'http://plus.google.com/pages/create',
        //     calltoactiondeeplinkid: '/pages/create'
        //   };
        //   // Call the render method when appropriate within your app to display
        //   // the button.
        //   gapi.interactivepost.render('sharePost', options);
          gapi.plus.render('gplus', {"contenturl": "http://illulli-1e5a.com/posts/hello/", "href": "http://illulli-1e5a.com/posts/hello/", 
          "width": "200", "height": "20", "theme": "light"});
         // gapi.plus.go('gplus');
    }
    renderText(){
        return this.props.item.content.map(e => {
          //  return <p style={{color:'green', margin: 'auto'}}>{e}</p>
            return <Text tag={'p'} text={e} align={'center'} colorKey={'text'} width={'100%'}/>
        })
    }
    renderGoogleShare(){
        if(this.props.gapiReady){
            return <p>gapi?</p>
        }
        return <p>no gapi</p>
    }
    render(){
        //return null;
        return (
            <PostBox>
                <Text tag={'p'} text={this.props.item.title} align={'center'} colorKey={'accent'} width={'100%'}/>
                <Tags tags={this.props.item.tags} />
                <Text tag={'p'} text={this.props.item.description} align={'center'} colorKey={'primary'} width={'100%'}/>
                {/* <Video url={this.props.item.youtube} /> */}
                {/* {this.renderText()} */}
                <button onClick={()=>{this.renderShare()}}>rebder</button>
                <div style={{margin:'auto', textAlign: 'center'}} itemscope={'true'} itemtype="http://schema.org/Product">
                    <h1 itemprop="name">Shiny Trinket</h1>
                    <p itemprop="description">Shiny trinkets are shiny. Count: {this.state.counter}</p>
                    <button onClick={()=>{
                        this.setState({
                            counter: this.state.counter + 1
                        })
                    }}>count</button>
                </div>
                <div id="sharePost">
                    sharePost
                </div>
                {this.renderGoogleShare()}
                <Shareable>
                    
                    <Icon icon={"done"} round={true} padding={'3px'}/>
                    <Icon icon={"delete"} round={true} padding={'3px'}/>
                    <Icon icon={"cached"} round={true} padding={'3px'}/>
                    <Icon icon={"save"} round={true} padding={'3px'}/>
                    {/* <!-- Place this tag where you want the share button to render. --> */}
                    <div id="gplus" className={'gplus'} data-action="share">shar</div>
                    <a href="https://plus.google.com/share?url=http://illulli-1e5a.com/posts/hello/" onclick="javascript:window.open(this.href,
  '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><img
  src="https://www.gstatic.com/images/icons/gplus-64.png" alt="Share on Google+"/></a>
                </Shareable>
            </PostBox>
          )
    }
}
Post.displayName='Post';
const mapStateToProps = (state) =>{
    console.log(`post mapStateToProps `, state);
    return {
        gapiReady: state.gapi.gapiReady
    }
}
export default connect(mapStateToProps)(withSiteData(withRouteData(Post)));


const PostBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 0px;
    position: relative;
    padding-bottom: 100px;
    background-color ${props => props.theme[props.theme.theme].neutral};
    @media only screen and (min-width: ${props => props.theme[props.theme.theme].mediaMinWidth}) {
        padding: 10px;
    }

`
const Box = styled.div`
    height: 100%;
    width: 100%;
    vertical-align: middle;
    margin: auto;
    background-color: pink;
    text-align: center;
`
const Shareable = styled.div`
    margin:auto;
    width: 100%;
    text-align: center;
`
const Title = styled.h2`
    text-transformation: capitalize;
    text-align: center;
`


/*


const VideoBox = styled.div`
    width: 100%;
    height: 189px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
        display: inline;
        float: left;
        height: 100%;
        flex: 1;
    }
    @media only screen and (min-width: ${props => props.theme[props.theme.theme].mediaMinWidth}) {
        flex-direction: row;
        div{
            flex: 1;
            display: inline;
        }
        p{
            
        }
    }
`











    div{
        height: 100%;
        position: relative;
        display: inline-block;
        margin: auto;
        min-width: 336px;
        flex: 1;
    }
*/