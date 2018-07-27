
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

    render(){
        return (
            <PostBox>
                {this.redirect()}
                <Tags tags={this.props.tags} tag={this.props.tag} />
                {this.renderPagination()}          
                        <Slide offset={100} duration={1500} childDelay={150}>
                            {this.props.posts.map(p =>{
                                    return <span className='anim-child'>
                                            <PostItem.component post={p} />
                                        </span>;
                                } 
                            )}
                        </Slide>
            </PostBox>
          )
    }
}

Games.displayName='Posts';
export default withRouteData(Games);

const Space = styled.div`
    width:90%;
    height: 100px;
    margin: 10px auto;
    position: relative;
    display: block;
`

const PostBox = styled.div`
    height: 100%;
    width: 100%;
    padding-bottom: 100px;
    background-color ${props => props.theme[props.theme.theme].neutral};
    overflow-y: scroll;
`
