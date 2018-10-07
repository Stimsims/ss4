import React from 'react';
import {Link} from 'react-static';
import styled from 'styled-components';
import MyLog from 'MyLog';

const key = 'item'

class Item extends React.Component{
  constructor(props){
    super(props);
    MyLog('log', 'PostItem constructor');
  }

  render(){
    return(
          <Wrapper>
            <Link to={`/posts/${this.props[key].id}`} key={this.props[key].id} >
                <Post key={this.props[key].id}>
                    <h2>{this.props[key].title}</h2>
                    <p>
                        {this.props[key].tags.map((t, i) => {
                        return i===0? ""+t:", "+t;
                        })}
                    </p>
                </Post>
            </Link>
          </Wrapper>
      )
  }
}
//export default Item;
export default {
  key,
  component: Item
}
const Wrapper = styled.div`

  margin: auto;
  padding: 10px 10px 0px 10px;
`
/*

  @media only screen and (min-width: 500px) {
    width:400px;
    max-width:400px;
    margin: 10px auto 0px auto;
  }
*/
const Post = styled.div`
  width:100%;
  position: relative;
  display: block;
  opacity:1;
  padding:25px 25px 10px 25px;
  border-radius: ${props=>props.theme.roundCorners};
  background-color:  ${props=>props.theme.primary};
  transition: all  ${props=>props.theme.animS} ease-in;
  &:hover{
    background-color: ${props=>props.theme.primaryL};
  }
  h2{
    font-size: 1.7em;
    display: inline;
    color: ${props=>props.theme.text};
    opacity:1;
    text-transform: capitalize;
    margin:0
    vartical-align: bottom;
  }
  p{
    font-size: 1em;
    color: ${props=>props.theme.textInverted};
    opacity:1;
    display: inline;
    text-align: right;
    float: right;
    margin:0
    vartical-align: bottom;
  }
`

// export default {
//     component,
//     key
// }

