
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static'
//import Dynamic from './../components/DynamicComponent.jsx';
import Menu from './../components/layout/MainMenu.jsx';
import GameItem from './../components/layout/GameListItem.jsx';
import Container from './../components/UI/elements/Container';
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
            <Container>
                <Menu />

                <div>
                    {this.props.games.map(post => {
                        return(
                            <GameItem game={post} />
                        )
                    })}
                </div>
            </Container>
          )
    }
}

export default withSiteData(withRouteData(Games));
