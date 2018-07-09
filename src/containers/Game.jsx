
import React from 'react'
import { withRouteData, Link } from 'react-static'
import Game from './../components/game/Index.jsx';
// import Dynamic from './../components/DynamicComponent.jsx';
//<Dynamic payload="./UI/math/Katex.jsx" />

class Games extends React.Component{
    constructor(props){
        super(props);
        console.log("game post constructor props", props);
        this.loadGame = this.loadGame.bind(this);
        this.getImport = this.getImport.bind(this);
        this.state = {
            game: null
        }
    }
    getImport(game){
        switch(game){
            case 'samplegame':
                return import('samplegame');
            default:
                console.warn(`game ${game} unknown, cannot import`);
                this.setState({
                    error: 'unknown game'
                })
        }
    }
    componentDidMount(){
        let getImport = this.getImport(this.props.game.import)
        if(getImport){
            getImport.then(res => {
                console.log("import of game files complete, promise:", res);
                this.loadGame(res);
            })
            .catch(e => {
                console.log("error importing game", e);
            })
        }
    }
    loadGame(game){
        this.setState({
            game
        })
    }
    render(){
        if(this.state.game){
            return (
                <Game game={this.state.game} />
              )
        }else if(this.state.error){
            return <p>error loading game: {this.state.error}</p>
        }else{
            return <p>loading game files...</p>
        }
    }
}

export default withRouteData(Games);

