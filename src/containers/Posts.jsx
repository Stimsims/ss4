
import React from 'react'
import { withRouteData, Link, Head, Redirect  } from 'react-static'
import styled from 'styled-components';
import Menu from './../components/layout/MainMenu.jsx';
import Bg from './../components/UI/elements/Bg.jsx';
import PostList from './../components/layout/PostList.jsx';
import Tags from './../components/layout/Tags.jsx';
import SlideUp from './../components/UI/animations/SlideUp';
class Games extends React.Component{
    constructor(props){
        super(props);
        console.log("posts constructor", props);
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
                    {this.redirect()}
                    <Menu />
                    <Title>{this.props.title}</Title>
                    <Tags tags={this.props.tags} tag={this.props.tag} />
                    {this.renderPagination()}
                <SlideUp>            
                    <div>
                        <PostList posts={this.props.posts} />
                    </div>
                </SlideUp>
            </Container>
          )
    }
}

export default withRouteData(Games);

const Title = styled.h2`
    text-transform: capitalize;
    color: white;
    background: grey;
    text-align: center;
    width: 100%;
    padding: 0px;
    display: inline-block;
`
const Container = styled.div`
    background: black;
    width:100%;
    height:100vh;
    overflow: hidden;
`