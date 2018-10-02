
import React from 'react'
import { withRouteData, Link } from 'react-static'
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
    renderText(){
        return this.props.item.content.map(e => {
            return <p style={{color:'green'}}>{e}</p>
        })
    }
    render(){
        //return null;
        return (
            <PostBox>
                <Text tag={'h1'} text={this.props.item.title} align={'center'} colorKey={'accent'} width={'100%'}/>
                <Tags tags={this.props.item.tags} />
                <Text tag={'p'} text={this.props.item.description} align={'center'} colorKey={'primary'} width={'100%'}/>
                <Video url={this.props.item.youtube} />
                {this.renderText()}
                <div itemscope={'true'} itemtype="http://schema.org/Product">
                    <h1 itemprop="name">Shiny Trinket</h1>
                    <p itemprop="description">Shiny trinkets are shiny. Count: {this.state.counter}</p>
                    <button onClick={()=>{
                        this.setState({
                            counter: this.state.counter + 1
                        })
                    }}>count</button>
                </div>
                <Shareable>
                    <Icon icon={"done"} round={true} padding={'3px'}/>
                    <Icon icon={"delete"} round={true} padding={'3px'}/>
                    <Icon icon={"cached"} round={true} padding={'3px'}/>
                    <Icon icon={"save"} round={true} padding={'3px'}/>
                    {/* <!-- Place this tag where you want the share button to render. --> */}
                    <div class="g-plus" data-action="share"></div>
                </Shareable>
            </PostBox>
          )
    }
}
Post.displayName='Post';
export default withRouteData(Post);
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