import React from 'react';
import { Link } from 'react-static'
import Accordion from '../UI/elements/Accordion.jsx';

class GameItem extends React.Component{
    constructor(props){
        super(props);
        let subtitle = this.props.game.tags.map((t, i) => {
            return i<=0? `${t}`:`, ${t}`
        })
        this.state = {
            subtitle
        }
    }
    render(){
        return(
            <Accordion
                key={this.props.game.id}
                event={{category: 'GamesPage', label: this.props.game.id}} 
                title={this.props.game.title}
                subtitle={this.state.subtitle}
                callToAction={()=>{
                    return( 
                    <Link key={this.props.game.id} 
                    to={`/games/${this.props.game.id}`}>Play
                    </Link>)
                }}>
                {this.props.game.desc}
            </Accordion>
        )
    }
}
export default GameItem;