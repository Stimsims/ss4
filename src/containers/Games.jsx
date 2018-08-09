
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static'
import TextBox from './../components/UI/elements/TextBox.jsx';
import Text from './../components/UI/elements/Text.jsx';
import styled from 'styled-components';
import Slide from './../components/UI/animations/Slide.jsx';
//import Katex from './../components/UI/math/Katex.jsx';
//pulling katex out of games removed it from most modules and from sample game
//referencing katex at top of file brings katex into 1 templates/Games
//dynamic component put katex in template/game-samplegame bundle, templates/ui-math-katex
    //knocking out payload, and just importing Dynamic component brings katex in??
//taking out trends removed any visible sources of chartist and lodash
//referencing something in App.js pulls it into main
//referencing katex in 2 seperate routes, eg posts and games causes duplication
// import(/* webpackChunkName: "mykatex" */ 'react-katex') can pull into own bundle that can be shared between
//referencing directly in game and post duplicates module
//referencing direct in 1, and dynamic in other, causes duplication


class Games extends React.Component{
    constructor(props){
        super(props);

    }
    // dynamic(){
    //     return <Dynamic payload={'./../components/UI/math/Katex.jsx'}/>
    // }
    render(){
        return (
            // <div><p>Games</p>

            //     <Link 
            //             to={`/games/samplegame`}>
            //                 Play
            //             </Link>
            // </div>
            <GamesBox>
                <Slide offset={100} duration={1500} childDelay={150}>
                
                    {this.props.items.map(p =>{
                            return <span key={p.id} className='anim-child' style={{padding: '10px'}}>
                                    <TextBox width={'200px'}>
                                            <div style={{width: '100%', height: '200px', background: 'grey'}} />
                                            <p>game tags</p>
                                            <div>
                                                <Text tag={'h2'} text={'Game Title'} display={'inline'} />
                                                <Link style={{float: 'right'}} key={p.id} 
                                                to={`/games/${p.id}`}>
                                                    Play
                                                </Link>
                                            </div>
                                    </TextBox>
                                </span>;
                        } 
                    )}
                </Slide>
            </GamesBox>
          )
    }
}
Games.displayName = 'Games';
export default withRouteData(Games);

const RandoText = styled.p`
    color: ${props => props.theme[props.theme.theme].neutral};
    position: absolute;
    width: 0px; height: 0px;
`
const GamesBox = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: ${props => props.theme[props.theme.theme].neutral};
    overflow-y: auto;
`

/*
                    {this.props.games.map(post => {
                        return(
                            <GameItem game={post} />
                        )
                    })}
*/