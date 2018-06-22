import React from 'react';


//story passed in via props to views
//views call render and pass input to story
//views have render methods for sub components
export class Story{

    mapStateToProps(state, props, type, key){
        console.log("Story map state to props")
        return {

        }
    }
    render(){
        return(
            <p></p>
        )
    }
}