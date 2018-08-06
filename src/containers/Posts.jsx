
import React from 'react'
import { withRouteData, Link, Head, Redirect  } from 'react-static'
import styled from 'styled-components';
import Container from './../components/UI/elements/Container';
import Tags from './../components/layout/Tags.jsx';
import Translate from './../components/UI/animations/Translate.jsx';
import Slide from './../components/UI/animations/Slide.jsx';
import PostItem from './../components/layout/PostItem.jsx';

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
        return (
            <PostBox>
                {this.redirect()}
                <button onClick={() => {
                    this.props.posts.pop();
                    this.forceUpdate();
                }}>bbb</button>
                <Tags tags={this.props.tags} tag={this.props.tag} />
                <div style={{width: '100%', display: 'flex', padding: '0px 10px', justifyContent: 'center'}}>
                    {this.renderPagination()}      
                </div>    
                        <Slide offset={0} duration={1000} childDelay={150}>
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

const A = styled.span`
    padding: 3px;
    color: cyan;
    a{
        color: yellow;
    }
`
const Space = styled.div`
    width:90%;
    height: 100px;
    margin: 10px auto;
    position: relative;
    display: block;
`

const PostBox = styled.div`
    height: 100%;
    width:100%;
    margin: auto;
    max-width:400px;
    position: relative;
    padding-bottom: 100px;
    background-color ${props => props.theme[props.theme.theme].neutral};
  
`
//   overflow-y: scroll;