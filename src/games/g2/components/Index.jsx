
import React from 'react';
import {getStory} from './../story/Factory.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Index extends React.Component{
    constructor(props){
        super(props);
        //game passed in, search for current location and id in store, if not, start with index
        console.log("game index props");
        console.log(props);
        this.hasStoryChanged = this.hasStoryChanged.bind(this);
        this.setStory = this.setStory.bind(this);
        
    }
    componentWillMount(){
        this.setStory();
    }
    componentDidUpdate(){
        if(this.hasStoryChanged()){
            this.getStory();
        }
    }
    hasStoryChanged(){
        return this.props.index.location != this.state.location || 
        this.props.index.key != this.state.location.key
    }
    setStory(){
        let story = getStory(this.props.index.key);
        console.log("getStory " + story);
        this.setState({
            location: this.props.index.location,
            key: this.props.index.key,
            story
        })
    }
    renderStory(){
        if(this.state.story){
           return this.state.story.getView();
        }else{
            return <p>loading game</p>
        }
    }
    render(){
        //retrieve 
        return(
            <div>
                {this.renderStory()}
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators({
//             changeHealth,
//             setComponentState,
//             setComponentNodeId
//         }, dispatch)
//     }
// }

const mapStateToProps = (state) => {
    console.log("map start state to props");
    console.log(state);
    return {
        index: state.index
    }
}

export default connect(mapStateToProps)(Index);
//export default Index;