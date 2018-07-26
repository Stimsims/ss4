import React from 'react';
import NodeGroup from 'react-move/NodeGroup';
import { easePolyOut } from 'd3-ease';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//translates (x or y) a list of items
//passes item as data with itemKey, and props.other to props.component
export default class Translate extends React.Component{
    constructor(props){
        super(props);
        console.log("renderPosts called Translate constructor", props);
    }
    render(){
        if(this.props.items){
            let inject = {
                [this.props.itemKey]: null
            };
            return (
                <Wrapper>
                    <NodeGroup
                            data={this.props.items}
                            keyAccessor={(p) => p[this.props.itemId]}
                                                            // start={(d, i) => ({
                            //     transY: [-2000],
                            //     timing: { duration: 800, delay: i*300,  ease: easeExpInOut },
                            // })}
                            // enter={(d, i) => ({
                            //     transY: [0],
                            //     timing: { duration: 800, delay: i*300,  ease: easeExpInOut },
                            // })}
                            start={(d, i) => {
                                let s = {
                                    timing: { duration: 800, delay: i*150,  ease: easePolyOut }
                                };
                                if(this.props.y) {s.y = this.props.y.start? [this.props.y.start]:[0]};
                                if(this.props.x) {s.x = this.props.x.start? [this.props.x.start]:[0]};
                                //if(this.props.x) {s.x = this.props.x.start? [this.props.x.start]:[0]};
                                console.log("Translate start obj ", s);
                                return s;
                            }}
                            enter={(d, i) => {
                                let e = {
                                    timing: { duration: 800, delay: i*150,  ease: easePolyOut }
                                };
                                if(this.props.y) {e.y = this.props.y.enter? [this.props.y.enter]:[0]};
                                if(this.props.x) {e.x = this.props.x.enter? [this.props.x.enter]:[0]};
                                console.log("Translate enter obj ", e);
                                return e;
                            }}
                            update={(d, i) => {
                                let u = {
                                    timing: { duration: 800, delay: i*150,  ease: easePolyOut }
                                };
                                if(this.props.y) {u.y = this.props.y.update? [this.props.y.update]:[0]};
                                if(this.props.x) {u.x = this.props.x.update? [this.props.x.update]:[0]};
                                console.log("Translate update obj ", u);
                                return u;
                            }}
                            leave={(d, i) => {
                                let l = {
                                    timing: { duration: 800, delay: i*150,  ease: easePolyOut }
                                };
                                if(this.props.y) {l.y = this.props.y.leave? [this.props.y.leave]:[0]};
                                if(this.props.x) {l.x = this.props.x.leave? [this.props.x.leave]:[0]};
                                console.log("Translate update obj ", l);
                                return l;
                            }}
                        >
                            {(nodes) => (
                                <div>
                                    {nodes.map((node) => {
                                        let { key, data, state } = node;
                                    const { y, x, ...rest } = state;
                                    inject[this.props.itemKey] = data;
                                    console.log(`translate data`, node);
                                    return (
                                        <div style={{display: 'block', translate: 'all 1s ease', 
                                        transform: `translate(${x? x:0}${this.props.x && this.props.x.unit?this.props.x.unit:'px'}
                                                            , ${y? y:0}${this.props.y && this.props.y.unit?this.props.y.unit:'px'})`}}>
                                            <this.props.component {...inject} {...this.props.other} />
                                        </div>
                                    );
                                    })}
                                </div>
                            )}
                        </NodeGroup>
                    </Wrapper>
            )
        }else{
            return <p>Translate has no items to animate</p>
        }
    }
}

Translate.PropTypes = {
    itemId: PropTypes.string,
    itemKey: PropTypes.string,
    items: PropTypes.array,
    component: PropTypes.object
}


const Wrapper = styled.div`
    width:100%;
    top:0; left: 0; right:0; bottom: 0;
    padding: 10px;
    position: absolute;
    overflow-y: auto;
`