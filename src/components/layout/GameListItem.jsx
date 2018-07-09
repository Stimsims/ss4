import React from 'react';
import { Link } from 'react-static'
import Accordion from '../UI/elements/Accordion.jsx';

class GameItem extends React.Component{
    render(){
        return(
            <Accordion
                key={this.props.game.id}
                event={{category: 'GamesPage', label: this.props.game.id}} 
                snippet={this.props.game.title}
                callToAction={()=>{
                    return( 
                    <Link key={this.props.game.id} 
                    to={`/games/${this.props.game.id}`}>Play Game
                    </Link>)
                }}>
                {this.props.game.desc}
            </Accordion>
        )
    }
}
export default GameItem;