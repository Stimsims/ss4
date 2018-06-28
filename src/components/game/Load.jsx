import React from 'react';
import Store from './Store.jsx';
import {guid} from './../../utilities/ids.js';

if (typeof window === 'undefined') {
    global.window = {}
}
function getFileName(game, id, name){
    return `${game}:${id}:${name}`
}
function getStoreName(game, id){
    return `${game}-${id}`
}
const DATE = 'date',
      DESC = 'desc';
class Index extends React.Component{
    constructor(props){
        super(props);
        this.onNewGame = this.onNewGame.bind(this);
        this.onLoadGame = this.onLoadGame.bind(this);
        this.state = {
            filename: null,
            local: {}
        }
    }
    componentDidMount(){
       let localStorage = window.localStorage;
        //let query = /(mygames)/;
        let query = new RegExp("(" + this.props.gamename + ":)");
        let i, results = [];
        for (i in localStorage) {
            if (localStorage.hasOwnProperty(i)) {
                console.log("does key " + i + " match " + query + "? " + i.match(query));
                //if (i.match(query) || (!query && typeof i === 'string')) {
            if (i.match(query)) {
                console.log("yes it does!");
                //value = JSON.parse(localStorage.getItem(i));
                let value = localStorage.getItem(i);
                results.push({key:i,val:value});
            }
            }
        }
        console.log("loading files", results);
        let ids = results.map(f => {
            let parts = f.key.split(":");
            return parts[1];
        });
        console.log("file ids", ids);
        //put ids into state.local, pointing to obj with keys for date and desc
        let local = {};
        ids.map(id => {
            if(!local[id]){
                local[id] = {
                    date: localStorage.getItem(getFileName(this.props.gamename, id, DATE)),
                    desc: localStorage.getItem(getFileName(this.props.gamename, id, DESC))
                }
            }
        })
        this.setState({
            local
        })
        console.log("local meta", local);
    }
    renderNewGame(){
        return (
            <button onClick={() => {
                this.onNewGame();
                }}>
                New Game
            </button>
        )
    }
    renderSaves(){
        if(this.state.local){
            return Object.keys(this.state.local).map((k, i) => {
                let save = this.state.local[k];
                return (<button onClick={() => {
                    this.onLoadGame(k);
                    }}>
                        save {i} date: {save.date}, desc: {save.desc}
                    </button>)
            })
               // return this.state.local[k].map((e, i) => {{}
        }
    }
    onNewGame(){
        //create a new save id, and generate first save date and desc
        //set game +id as filename
        let id = guid();
        let name = getStoreName(this.props.gamename, id);
        console.log("new game name: " + name);
        let localStorage = window.localStorage;
        localStorage.setItem(getFileName(this.props.gamename, id, DATE), 'Sunday 2:21am');
        localStorage.setItem(getFileName(this.props.gamename, id, DESC), 'hello world');
        this.setState({
            filename: name
        })
    }
    onLoadGame(id){
        //use game + id as filename, set as filename
        let name = getStoreName(this.props.gamename, id);
        console.log("load game name: " + name);
        this.setState({
            filename: name
        })
    }
    render(){
        if(this.state.filename){
            return(
                <Store savefile={this.state.filename}>
                  {this.props.children}
                </Store>
              )
        }else{
            return(
                <div>
                    {this.renderNewGame()}
                    <hr/>
                    {this.renderSaves()}
                </div>
            )
        }

    }
    
}
export default Index;