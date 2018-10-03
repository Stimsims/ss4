
import React from 'react'
import { withRouteData, withSiteData, Link } from 'react-static'
import {connect} from 'react-redux';
//import Menu from './../components/layout/MainMenu.jsx';
import IconBtn from './../components/UI/elements/IconButton.jsx';
import styled from 'styled-components';
import Tags from './../components/layout/Tags.jsx';
import MyLog from 'MyLog';
import Video from './../components/UI/elements/Video.jsx';
import TextBox from './../components/UI/elements/TextBox.jsx';
import Sizer from './../components/UI/elements/Sizer.jsx';
import Text from './../components/UI/elements/Text.jsx';
//import fb from './../assets/facebook-icon-white-logo-svg-vector.svg';
import fb from './../assets/fbsmall.png';
import {Helmet} from "react-helmet";

class Post extends React.Component{
    constructor(props){
        super(props);
        MyLog('log', "Post constructor", props);

        this.state = {
            counter: 0,
            url: props.siteRoot + props.history.location.pathname
        }
        //console.log(`post url ${this.state.url}`);
        console.log(`post url ${this.state.url} root ${props.siteRoot}`, props); 
    }
    componentDidMount(){
       // console.log(`mypost href = ` + props.history.createHref());
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
        //   gapi.plus.render('gplus', {"href": "https://www.youtube.com", 
        //   "width": "200", "height": "20", "theme": "light"});
         // gapi.plus.go();
          gapi.plusone.go();
        //   gapi.plusone.render('shareable', {
        //       height: "60", href: this.state.url, size: "standard"
        //   })
    }
    renderText(){
        return this.props.item.content.map(e => {
          //  return <p style={{color:'green', margin: 'auto'}}>{e}</p>
            return <Text tag={'p'} text={e} align={'center'} width={'100%'}/>
        })
    }
    renderGoogleShare(){
        if(this.props.gapiReady){
            return <p>gapi?</p>
        }
        return <p>no gapi</p>
    }
    renderVideo(){
        if(this.props.item.youtube){
            return (
                <div style={{height: '200px'}} itemprop="video">
                <Video url={this.props.item.youtube} />
            </div>
            )
        }
        return null;
    }
    render(){
        //return null;
        return (
            <PostBox itemscope={true} itemtype={'https://schema.org/Article'}>
                <Helmet>
                    <meta property="og:title" content={`${this.props.item.title}`} />
                    <meta property="og:description" content={`${this.props.item.description}`} />
                    <meta property="og:site_name" content={`${this.props.siteTitle}`} />
                    <meta property="og:type" content={`http://ogp.me/ns/article#`} />
                    {this.props.item.youtube? <meta property="og:video" content={`${this.props.item.youtube}`} />:null}
                    {this.props.item.tags? <meta property="og:article:tag" content={`${this.props.item.tags.join()}`} />:null}
                </Helmet>
                <span itemprop="name">
                    <Text tag={'h1'} itemprop="name" text={this.props.item.title} align={'center'} colorKey={'accent'} width={'100%'}/>
                </span>
                <Tags tags={this.props.item.tags} />
                <Hidden itemprop="keywords">{this.props.item.tags.join()}</Hidden>
                <Text tag={'p'} itemprop="description" text={this.props.item.description} align={'center'} colorKey={'primary'} width={'100%'}/>

                {this.renderText()}
                {/* <button onClick={()=>{this.renderShare()}}>rebder</button> */}
                {/* <div style={{margin:'auto', textAlign: 'center'}} itemscope={'true'} itemtype="http://schema.org/Product">
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
                </div> */}
                {/* {this.renderGoogleShare()} */}
                <Shareable id="shareable">
                    <IconBtn icon={"gp"} round={true} padding={'3px'} color={'red'} onInput={()=>{
                        window.open(`https://plus.google.com/share?url=${this.state.url}`, "pop", "width=600, height=400, scrollbars=no");
                    }}/>
                    <IconBtn icon={"fb"} round={true} padding={'3px'} color={'blue'} onInput={()=>{
                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.state.url}`, "pop", "width=600, height=400, scrollbars=no");
                    }}/>
                    {/* <Icon icon={"done"} round={true} padding={'3px'}/>
                    <Icon icon={"delete"} round={true} padding={'3px'}/>
                    <Icon icon={"cached"} round={true} padding={'3px'}/>
                    <Icon icon={"save"} round={true} padding={'3px'}/> */}
                    {/* <div class="g-plusone" data-size="standard" data-href={this.state.url}></div> */}
                    {/* <button onClick={()=>{
                        window.open("https://www.facebook.com/sharer/sharer.php?u=http://illulli-1e5a.com/posts/hello/", "pop", "width=600, height=400, scrollbars=no");
                    }}>fb share</button> */}
                    {/* <FbLink>
                        <a className="fb-share" onClick={()=>{
                            window.open("https://www.facebook.com/sharer/sharer.php?u=http://illulli-1e5a.com/posts/hello/", "pop", "width=600, height=400, scrollbars=no");
                        }}>
                            {/* <span className="fb-share-icon"></span> 
                            <img src={fb} style={{width:'14px', height:'14px'}} />
                            <span className="fb-share-text">Share</span>
                        </a>
                    </FbLink> */}
                    {/* <a onClick={()=>{
                        window.open(`https://plus.google.com/share?url=${this.state.url}`, "pop", "width=600, height=400, scrollbars=no");
                    }}><img
                    src={gp32} alt="Share on Google+"/></a>

                    <a onClick={()=>{
                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.state.url}`, "pop", "width=600, height=400, scrollbars=no");
                    }}><img
                    src={fb32} alt="Share on Facebook"/></a> */}

                    {/* <a href="https://plus.google.com/share?url=this.state.url" onclick="javascript:window.open(this.href,
                    '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><img
                    src={fb32} alt="Share on Google+"/></a> */}
                </Shareable>
            </PostBox>
          )
    }
}
/*
<!-- Place this tag in your head or just before your close body tag. -->
<script src="https://apis.google.com/js/platform.js" async defer>
  {parsetags: 'explicit'}
</script>

<!-- Place this tag where you want the share button to render. -->
<div class="g-plus" data-action="share" data-href="http://illulli-1e5a.com/posts/hello/"></div>

<!-- Place this render call where appropriate. -->
<script type="text/javascript">gapi.plus.go();</script>
*/
Post.displayName='Post';
const mapStateToProps = (state) =>{
    console.log(`post mapStateToProps `, state);
    return {
        gapiReady: state.gapi.gapiReady
    }
}
export default connect(mapStateToProps)(withSiteData(withRouteData(Post)));
const Hidden = styled.p`
    visibility: none;
`
const FbLink = styled.span`
.fb-share {
    vertical-align: top;
    display: inline-block;
    position: relative;
    height: 18px;
    border: 1px solid #cad4e7;
    border-radius: 3px;
    background-color: #45619dff;
    color: #3b5998;

    text-decoration: none;
    white-space: nowrap;
    /* IE7 */
    *display: inline;
    *zoom: 1;
  }
  .fb-share:hover {
    border-color: #9dacce;
  }
  .fb-share .fb-share-icon {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    top: 4px;
    margin-right: 1px;
    background-image: url(${fb});
    /* IE7 */
    *display: inline;
    *zoom: 1;
  }
  .fb-share .fb-share-text {
    line-height: 18px;
    height: 18px;
    color: white;
    top: -4px;
    font-family: 'Lucida Grande', Tahoma, Verdana, Arial, sans-serif;
    font-size: 11px;
  }
`

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