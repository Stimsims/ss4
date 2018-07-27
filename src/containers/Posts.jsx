
import React from 'react'
import { withRouteData, Link, Head, Redirect  } from 'react-static'
import styled from 'styled-components';
//import Menu from './../components/layout/MainMenu.jsx';
import Container from './../components/UI/elements/Container';
//import PostList from './../components/layout/PostList.jsx';
import Tags from './../components/layout/Tags.jsx';
import Translate from './../components/UI/animations/Translate.jsx';
import Slide from './../components/UI/animations/SlideDown.jsx';
import PostItem from './../components/layout/PostItem.jsx';
// const Post = (arg) => {
//     console.log("Post function arg1 ", arg);
//     return <p>Post item</p>
// }

class Games extends React.Component{
    constructor(props){
        super(props);
        console.log("posts constructor", props);
        this.state = {
            render: false
        }
    }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             render: true
    //         })
    //     }, 3000);
    // }
    renderPagination(){
        if(this.props.totalPages > 1){
            let pagination = [];
            if(this.props.currentPage > 1){
                //there is a previous page, add a link to it
                //pagination.push(<p>go to prev page {this.props.currentPage-1}</p>)
                pagination.push(<Link to={`/${this.props.base}/${this.props.pageToken}/${this.props.currentPage-1}`}>Previous</Link>)
            }
            if(this.props.currentPage < this.props.totalPages){
                //there is a previous page, add a link to it
               // pagination.push(<p>go to next page {this.props.currentPage+1}</p>)
               pagination.push(<Link to={`/${this.props.base}/${this.props.pageToken}/${this.props.currentPage+1}`}>Next</Link>)
            }
            return pagination;
        }
        return null;
    }

    redirect(){
        if(this.props.totalPages > 1 && this.props.match.url == `/${this.props.base}`){
            return <Redirect to={`${this.props.base}/${this.props.pageToken}/1`} />
        }
    }
    renderBody(){
        //if exiting, don't bother with translate this.props.animationState === 1
        //parent animations don't seem to restart child transitions
        return (
            <FlexBox>
                {this.redirect()}
                {/* <Tags tags={this.props.tags} tag={this.props.tag} /> */}
                {/* {this.renderPagination()}           */}
                <PostBox>
                    
                    {/* <Translate items={this.props.posts} itemKey={'post'} itemId={'id'} 
                        component={PostItem.component} y={{start: -200, enter: 0, unit: 'vh'}} 
                        /> */}
                        <Slide>
                            <Space />
                            <Space />
                            <Space />
                            <Space />
                            <Space />
                        </Slide>
                </PostBox>
            </FlexBox>
        )
    }
    render(){
        return (
            <PostBox>
                    
                {/* <Translate items={this.props.posts} itemKey={'post'} itemId={'id'} 
                    component={PostItem.component} y={{start: -200, enter: 0, unit: 'vh'}} 
                    /> */}
                        <Slide>
                            <Space />
                            <Space />
                            <Space />
                            <Space />
                            <Space />
                        </Slide>
            </PostBox>
          )
       // return <p>Not rendering that when leaving!!</p>
    }
}

Games.displayName='Posts';
export default withRouteData(Games);
const Space = styled.div`
    width:100%;
    height: 400px;
    background-color: cyan;
    margin:10px:
    position: relative;
`
const FlexBox = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    flex-direction: column;
    padding-top: ${props=>props.theme[props.theme.theme].menuHeight};
`

const PostBox = styled.div`
    height: 100%;
    width: 100%;
    padding-bottom: 100px;
    background-color ${props => props.theme[props.theme.theme].neutralD};
    overflow-y: auto;
`
const Title = styled.h2`
    text-transform: capitalize;
    color: white;
    background: grey;
    text-align: center;
    width: 100%;
    padding: 0px;
    display: inline-block;
`
// const Container = styled.div`
//     background: black;
//     width:100%;
//     height:100vh;
//     overflow: hidden;
// `