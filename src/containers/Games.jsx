
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static'
import TextBox from './../components/UI/elements/TextBox.jsx';
import Text from './../components/UI/elements/Text.jsx';
import styled from 'styled-components';
import Slide from './../components/UI/animations/Slide.jsx';
import iVideoGame from './../assets/baseline-videogame_asset-24px.svg';

class Games extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <GamesBox>
                <Slide width={'100%'} offset={100} duration={1500} childDelay={150}>
                
                    {this.props.items.map(p =>{
                            return (
                                <TextBox width={'100%'} display={'block'}>
                                    <Img  />
                                    {/* <div style={{width: '100%', height: '200px', background: 'grey'}} /> */}
                                    <p>game tags</p>
                                    <div>
                                        <Text tag={'h2'} text={p.title} display={'inline'} align={'left'}/>
                                        <Link style={{float: 'right'}} key={p.id} to={`/games/${p.id}`}>
                                            Play
                                        </Link>
                                    </div>
                                </TextBox>
                            )
                        } 
                    )}
                </Slide>
            </GamesBox>
          )
    }
}
Games.displayName = 'Games';
export default withRouteData(Games);
const Img = styled.div`
    width: 100%;
    height: 100px;
    z-index: 999;
    background-image: url(${iVideoGame});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`
const GamesBox = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: ${props => props.theme.neutral};
    overflow-y: auto;
    padding: ${props => props.theme.spaceM}px;
`