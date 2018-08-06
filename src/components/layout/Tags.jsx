import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-static';

class Tags extends React.Component{
    
    render(){
        if(this.props.tags){
            return (
            <Container>
                {this.props.tags.map(t => {
                    //console.log(`tags rendering ${t} with target tag ${this.props.tag} does it match? ${t === this.props.tag}`);
                    if(this.props.tag && t === this.props.tag){
                        return <Tag><Link to={`/${t}`} className={'active'}>{t}</Link></Tag>
                    }else{
                        return <Tag><Link to={`/${t}`}>{t}</Link></Tag>
                    }
                })}
            </Container>)
        }
        return null;
    }
}
export default Tags;


const Tag = styled.h4`
    display: inline;
    padding: 0px 10px;
    margin: 0;
    a{
        color: grey;
    }
    a.active{
        color: red;
    }
`
const Container = styled.div`
    width:100%;
    padding: 10px;
    display: flex;
    justify-content: center;
`