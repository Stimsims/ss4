
import React from 'react'
import { withRouteData, Link, Head, Redirect  } from 'react-static'
import styled from 'styled-components';
import Menu from './../components/layout/MainMenu.jsx';
import Bg from './../components/UI/elements/Bg.jsx';
import Container from './../components/UI/elements/Container';
import PostList from './../components/layout/PostList.jsx';
import Tags from './../components/layout/Tags.jsx';
import SlideUp from './../components/UI/animations/SlideUp';
//import Katex from './../components/UI/math/Katex.jsx';
class Games extends React.Component{
    constructor(props){
        super(props);
      //  console.log("posts constructor", props);
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
            <Container>
                    <FlexBox>
                        {this.redirect()}
                        {/* <Menu /> */}
                        <Tags tags={this.props.tags} tag={this.props.tag} />
                        {this.renderPagination()}          
                        <PostBox>
                            <PostList posts={this.props.posts} />
                        </PostBox>
                    </FlexBox>
            </Container>
          )
    }
}

export default withRouteData(Games);

const FlexBox = styled.div`
    display: flex;
    height: 90%;
    width: 100%;
    flex-direction: column;
`

const PostBox = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    flex: 1;
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