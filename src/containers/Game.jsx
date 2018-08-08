
import React from 'react'
import { withRouteData, Link } from 'react-static'
import Index from './../components/game/Index.jsx';
import MyLog from 'MyLog';

class Games extends React.Component{
    constructor(props){
        super(props);
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
        let getImport = this.getImport(this.props.item.import)
        console.log('getting import props:', this.props);
        if(getImport){
            getImport.then(res => {
                console.log("import of game files complete, promise:", MyLog);
                MyLog('log', `import of game files successful ${res}`);
                 this.loadGame(res);
            })
            .catch(e => {
                console.log("error importing game " + getImport, MyLog);
              MyLog('warn', `error importing game ${e}`);
            })
        }
    }
    loadGame(game){
        this.setState({
            game
        })
    }
    render(){
        // return(
        //     <div>Game Container
        //     <Link to={'/games'} >home</Link>
        //     </div>
        // )
        if(this.state.game){
            return (
                <div>
                    <Index game={this.state.game} />
                </div>
              )
        }else if(this.state.error){
            return <p>error loading game: {this.state.error}</p>
        }else{
            return <p>loading game files...</p>
        }
        // return <div>Game</div>
    }
}
Games.displayName = 'Game';
export default withRouteData(Games);

