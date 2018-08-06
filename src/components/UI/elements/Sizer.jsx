import React from 'react';

export default class Sizer extends React.Component{
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, scale:0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ 
            width: window.innerWidth, 
            height: window.innerHeight, 
            scale: window.innerWidth < 400? 1: 1.5
        });
       // console.log("Sizer update dimensions width " + window.innerWidth + " scale = " + (window.innerWidth < 500? 1: 2));
      }
      render(){
        return React.Children.map(this.props.children, (child, i) => {
            return React.cloneElement(child, {scale: this.state.scale});
        })
      }
}