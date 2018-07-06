import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-static';

class Tags extends React.Component{
    
    render(){
        if(this.props.tags){
            return (
            <Container>
                {this.props.tags.map(t => {
                    console.log(`tags rendering ${t} with target tag ${this.props.tag} does it match? ${t === this.props.tag}`);
                    if(this.props.tag && t === this.props.tag){
                        return <Tag><Link to={`/${t}`}  style={{color:'red'}}>{t}</Link></Tag>
                    }else{
                        return <Tag><Link to={`/${t}`}>{t}</Link></Tag>
                    }
                })}
            </Container>)
        }else{
            return <Container><p>no tags to be found</p></Container>
        }
    }
}
export default Tags;


const Tag = styled.h4`
    display: inline;
    color: grey;
    padding: 10px;
    background: yellow;
`
const Container = styled.div`
    width:100%;
    background: grey;
    padding: 10px;
`