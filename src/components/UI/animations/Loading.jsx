import React from 'react';
import Animate from 'react-move/Animate';
import NodeGroup from 'react-move/NodeGroup';
import { easeExpOut } from 'd3-ease';
import styled from 'styled-components';

function createCircle(id, x, y){
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = 16;
}
const circles = [];
function drawCircles(){
    let radius = 50;
    let offset = 68;
    for(var i = 0; i<2*Math.PI; i+=Math.PI/6){
    //for(var i = 0; i<360; i+=30){
        console.log(`creating circle i:${i} cos: ${Math.cos(i)*radius} sin: ${Math.sin(i)*radius}`)
        circles.push(new createCircle(i, Math.cos(i)*radius + offset, Math.sin(i)*radius + offset))
    }
}
drawCircles();

export default class Loading extends React.PureComponent{
    constructor(props){
        super(props);
        //let c = new createCircle(50, 50);
        this.state = {
           // animation: this.getAnimation(),
            forward: true
        }
    }

    render(){
        return <Load>
                {
                    circles.map(c => {
                        return (
                            <div className={'load-circle'} style={{position: 'absolute', width: `${c.r*2}px`, height: `${c.r*2}px`, 
                            left: `${c.x}px`, top: `${c.y}px`, backgroundColor: 'transparent', 
                            }} ></div>
                        )
                    })
                }
            </Load>
    }
}


const Load = styled.div`
    position: relative;
    background-color: transparent;
    height: 168px;
    width: 168px;
    margin: auto;
    display: block;
    vertical-align: middle;
    position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  /*this to solve "the content will not be cut when the window is smaller than the content": */
        max-width:100%;
        max-height:100%;
        overflow:auto;
    div{
        animation-name: example;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-timing-function: ease-in-out;
        border-radius: 50%; 
        border: 2px solid #7A17A880;
        background-color: transparent;
    }
    ${circles.map((c, i) => {
        return (
            `
            div:nth-child(${i}){
                animation-delay: ${i*0.25}s;
            }
            `
        )
    })}
    @keyframes example {
        from {
            transform: scale(1, 1);
            border: 2px solid #7A17A880;
        }
        to {
            transform: scale(2, 2);
            border: 2px solid #7A17A8FF;
        }
    }
`

/*


div:nth-child(1){
        animation-delay: 1s;
    }
    div:nth-child(2){
        animation-delay: 2s;
    }
    div:nth-child(3){
        animation-delay: 3s;
    }

return <div style={{position: 'relative', backgroundColor: 'yellow', height: '300px', width: '300px'}}>
                <button onClick={()=>{this.setState({forward:!this.state.forward, 
                    circles: [...this.state.circles, new createCircle(this.state.circles.length, 
                    Math.random()*200, Math.random()*200)]}
                )}}>scale</button>
                <NodeGroup
                        data={this.state.circles}
                        keyAccessor={(p) => p.id}
                        start={() => ({
                            scale: [1],
                            events: { 
                                end: () => {this.restartAnimation('enter', e)}
                            }
                        })}

                        enter={(e, i) => ({
                            scale: [2],
                            timing: { duration: 1000, delay: i*350 },
                            events: { 
                                end: () => {this.restartAnimation('enter', e)}
                            }
                        })}
                        update={(c, i) => ({
                            scale: () => {
                               // console.log('loading restartAnimation  update scale called, ' + this.state.forward);
                                return this.state.forward? [1]:[2]
                            },
                            timing: {duration: 1000, delay: i*350 },
                            events: { 
                                end: () => {this.restartAnimation('update', c)}
                            }
                        })}
                        >
                        {(nodes) => {
                            console.log("loading nodes", nodes);
                            return(
                                <div>
                                    {   
                                        nodes.map((node) => {
                                            const { state, data } = node;
                                            const {scale} = state;
                                            console.log(`loading animation circles scale: ${scale}`, node);
                                            data.scale = scale;
                                            return <div style={{position: 'absolute', width: `${data.r*2}px`, height: `${data.r*2}px`, 
                                            left: `${data.x}px`, top: `${data.y}px`, backgroundColor: 'transparent', 
                                            transform: `scale(${scale})`,
                                            borderRadius: '50%', border: '5px solid red'}} ></div>
                                        })
                                    }
                                </div>
                            )
                        }}
                </NodeGroup>
            </div>






















return <div>
                <Animate
                        start={() => ({
                            rotate: [0]
                        })}

                        enter={() => ({
                            rotate: [360],
                            timing: { duration: 2000, ease: easeExpOut },
                            events: { 
                                start: () => {this.restartAnimation('enter', 0)}
                            }
                        })}
                        update={() => ({
                            rotate: [this.state.angle],
                            timing: {duration: 2000, ease: easeExpOut },
                            events: { 
                                end: () => {this.restartAnimation('update', this.state.angle === 360? 0: 360)}
                            }
                        })}
                        >
                        {(state) => {
                            const { rotate } = state;
                            console.log(`loading animation rotate: ${rotate}`);
                            return (
                                <div
                                    style={{
                                        position: 'absolute',
                                        width: 50,
                                        height: 50,
                                        borderRadius: '50%',
                                        backgroundColor: '#00cf77',
                                        WebkitTransform: `rotate(${rotate}deg)`,
                                        transform: `rotate(${rotate}deg)`,
                                    }}
                            >
                            loading 
                            </div>
                            );
                        }}
                </Animate>
            </div>
*/