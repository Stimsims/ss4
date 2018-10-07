
import React from 'react'
import { withRouteData, Link, Head, Redirect, withSiteData  } from 'react-static'
import styled from 'styled-components';
import Container from './../components/UI/elements/Container';
import Tags from './../components/layout/Tags.jsx';
import Slide from './../components/UI/animations/Slide.jsx';
import PostItem from './../components/layout/PostItem.jsx';

class Posts extends React.Component{
    constructor(props){
        super(props);
      //  console.log("posts constructor", props);
        this.state = {
            render: false
        }
    }

    renderPagination(){
        if(this.props.totalPages > 1){
            let pagination = [];
            if(this.props.currentPage > 1){
                //there is a previous page, add a link to it
                pagination.push(<A style={{flex:'1'}}><Link to={`/${this.props.base}/${this.props.pageToken}/${this.props.currentPage-1}`}>Previous</Link></A>)
            }else{
                pagination.push(<A style={{flex:'1'}}></A>)
            }
            for(let i = 1; i<=this.props.totalPages; i++){
                if(i === this.props.currentPage){
                    pagination.push(<A>{i}</A>)
                }else{
                    pagination.push(<A><Link to={`/${this.props.base}/${this.props.pageToken}/${i}`}>{i}</Link></A>)
                }
            }
            if(this.props.currentPage < this.props.totalPages){
               pagination.push(<A style={{flex:'1', textAlign: 'right'}}><Link to={`/${this.props.base}/${this.props.pageToken}/${this.props.currentPage+1}`}>Next</Link></A>)
            }else{
                pagination.push(<A style={{flex:'1', textAlign: 'right'}}></A>)
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
        console.log('rendering POSTS props', this.props);
        return (
            <PostBox>
                {this.redirect()}
                <Tags tags={this.props.tags} tag={this.props.tag} />
                <div style={{width: '100%', display: 'flex', padding: '0px 10px', justifyContent: 'center'}}>
                    {this.renderPagination()}      
                </div>    
                        <Slide offset={0} duration={1000} childDelay={150}>
                            {this.props.items.map(p =>{
                                    return <span className='anim-child' style={{width: '100%'}}>
                                            {/* <PostItem.component item={p} /> */}
                                            <Post>
                                                <h2>Title</h2>
                                                <p>tags, tags, tags</p>
                                            </Post>
                                        </span>;
                                    // return <p>item</p>
                                } 
                            )}
                        </Slide>
            </PostBox>
          )
    }
}

Posts.displayName='Posts';
export default withSiteData(withRouteData(Posts));

const Post = styled.div`
    width: 100%;
    padding: 20px 20px 5px 20px;
    margin: 10px 0px;
    background-color: white;
    border-bottom: 5px solid red;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row;
    h2{
        display: inline-block;
        margin: 0;
        background-color: yellow;
        flex: 1;
        
    }
    p{
        display: inline-block;
        flex:1;
        text-align: right;
        margin: 0;
        background-color: yellow;
    }
`

const A = styled.span`
    padding: 3px;
    color: cyan;
    a{
        color: yellow;
    }
`

const PostBox = styled.div`
    height: 100%;
    width:100%;
    margin: auto;
    max-width:500px;
    position: relative;
    padding-bottom: 100px;
    background-color ${props => props.theme.neutral};
  
`
//   overflow-y: scroll;