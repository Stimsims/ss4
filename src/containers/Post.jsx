
import React from 'react'
import { withRouteData, withSiteData, Link } from 'react-static';
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
import {Helmet} from "react-helmet";
import Meta from './../components/UI/elements/MetaComponent.jsx';

class Post extends React.Component{
    constructor(props){
        super(props);
     //   MyLog('log', "Post constructor", props);

        this.state = {
            counter: 0,
            url: props.siteRoot + props.history.location.pathname
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
        //  gapi.plusone.go();
    }
    renderText(){
        return this.props.item.content.map(e => {
          //  return <p style={{color:'green', margin: 'auto'}}>{e}</p>
            return <TextBox>
                <Text tag={'p'} text={e} align={'center'} width={'100%'}/>
            </TextBox>
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
    renderJson(){
        return {
            "@context": "http://schema.org/",
                "@type": "Recipe",
                "name": "Grandma's Holiday Apple Pie",
                "author": "Elaine Smith",
                "image": "http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",
                "description": "A classic apple pie.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4",
                    "reviewCount": "276",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "prepTime": "PT30M",
                "totalTime": "PT1H",
                "recipeYield": "8",
                "nutrition": {
                    "@type": "NutritionInformation",
                    "servingSize": "1 medium slice",
                    "calories": "230 calories",
                    "fatContent": "1 g",
                    "carbohydrateContent": "43 g",

                }
        }
    }
    render(){
        //return null; /webpackicons/android-chrome-256x256.png
        return (
            // <PostBox itemscope={true} itemtype={'https://schema.org/Article'}>
            <PostBox>
                {/* <Helmet>
                    <meta property="og:title" content={`${this.props.item.title}`} />
                    <meta property="og:description" content={`${this.props.item.description}`} />
                    <meta property="og:site_name" content={`${this.props.siteTitle}`} />
                    <meta property="og:type" content={`http://ogp.me/ns/article#`} />
                    <meta property="og:image" content={`${this.props.siteRoot}/webpackicons/android-chrome-256x256.png`} />
                    {this.props.item.youtube? <meta property="og:video" content={`${this.props.item.youtube}`} />:null}
                    {this.props.item.tags? <meta property="og:article:tag" content={`${this.props.item.tags.join()}`} />:null}
                </Helmet> */}
                <span itemprop="name">
                    <Text tag={'h1'} itemprop="name" text={this.props.item.title} align={'center'} colorKey={'accent'} width={'100%'}/>
                </span>
                {/* <img itemprop="image" src="/webpackicons/android-chrome-256x256.png"/> */}
                <Tags tags={this.props.item.tags} />
                {this.props.item.tags? <Hidden itemprop="keywords">{this.props.item.tags.join()}</Hidden>:null}
                <a href={`https://twitter.com/intent/tweet?source=https://illulli-1e5a.com/posts/pjsmoothie/&text=my post title`} target="_blank" title="Tweet"><i class="fi fi-social-twitter">twweett</i></a>
                <VidBox>
                    <TextBox style={{flex: '1'}} margin={'5px 0px'}>
                        <span itemprop="description" >
                            <Text tag={'p'} text={this.props.item.description} align={'center'} width={'100%'}/>
                        </span>
                    </TextBox>
                    <div style={{width: '10px', height: '10px'}}></div>
                    <div>
                        {this.renderVideo()}
                    </div>
                </VidBox>
                

               
                    <span itemprop="articleBody">
                        {this.renderText()}
                    </span>
          
                
                <Shareable id="shareable">
                    <IconBtn icon={"gp"} round={true} padding={'3px'} color={'red'} onInput={()=>{
                        window.open(`https://plus.google.com/share?url=${this.state.url}`, "pop", "width=600, height=400, scrollbars=no");
                    }}/>
                    <IconBtn icon={"fb"} round={true} padding={'3px'} color={'blue'} onInput={()=>{
                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.state.url}`, "pop", "width=600, height=400, scrollbars=no");
                    }}/>
                </Shareable>
                <Meta data={this.renderJson()} />
            </PostBox>
          )
    }
}

Post.displayName='Post';
const mapStateToProps = (state) =>{
   // console.log(`post mapStateToProps `, state);
    return {
        gapiReady: state.gapi.gapiReady
    }
}
export default connect(mapStateToProps)(withSiteData(withRouteData(Post)));
const Hidden = styled.p`
    visibility: hidden;
    height: 0; width: 0;
`

const VidBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding:0;
    @media only screen and (min-width: ${props => props.theme.mediaMinWidth}) {
        flex-direction: row;
    }
`

const PostBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 0px;
    position: relative;
    padding-bottom: 100px;
    background-color ${props => props.theme.neutral};
    @media only screen and (min-width: ${props => props.theme.mediaMinWidth}) {
        padding: 10px;
    }

`

const Shareable = styled.div`
    margin:auto;
    width: 100%;
    text-align: center;
`
