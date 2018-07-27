import React from 'react';
import animationState from './State.js';
import { easeQuadOut } from 'd3-ease'
import { NodeGroup } from 'react-move'
import { w, renderNothingithContext, getContext, withContext } from 'recompose';
import PropTypes from 'prop-types'

export default class Page extends React.Component{
    render(){
        return(
            <NodeGroup
          // React-move will handle the entry and exit of any items we pass in `data`
          data={[
            {
              // pass the current Comp, props, ID and router
              id: this.props.props.location.pathname,
              Comp: this.props.comp,
              props: this.props.props,
              router: this.props.router,
            },
          ]}
          keyAccessor={d => d.id}
          start={() => ({
            opacity: [0],
            scale: [1.2],
            translateY: [20],
            timing: { duration: 800, delay: 200, ease: easeQuadOut },
            events: { 
              start: () => {animationState.update('start', 'start')}, 
              end: () => {animationState.update('start', 'end')} }
          })}
          enter={() => ({
            opacity: [1],
            translateY: [0],
            scale: [1],
            timing: { duration: 800, delay: 200, ease: easeQuadOut },
            events: { 
              start: () => {animationState.update('enter', 'start')}, 
              end: () => {animationState.update('enter', 'end')} 
            }
          })}
          update={() => ({
            opacity: [1],
            scale: [1],
            timing: { duration: 800, delay: 200, ease: easeQuadOut },
            events: { 
              start: () => {animationState.update('update', 'start')}, 
              end: () => {animationState.update('update', 'end')} }
          })}
          leave={() => ({
            opacity: [0],
            translateY: [-0],
            scale: [0.2],
            timing: { duration: 800, ease: easeQuadOut },
            events: { 
              start: () => {animationState.update('leave', 'start')}, 
              end: () => {animationState.update('leave', 'end')}
             }
          })}
        >
          {nodes => (
            <div style={{ position: 'relative' }}>
              {nodes.map((props) => {
                let { key, data, type, state: { opacity, translateY, scale } } = props;
                console.log("pageRendering props anim state " + animationState.state, props);
                // Here, we override the router context with the one that was
                // passed with each route scale(${scale}, ${scale}) 
                //console.log(`animating map ${key} with opacity ${opacity} and scaleY ${scale} and rotate ${rotate}`);
                //animationState={animationState.state} 
                const PreservedRouterContext = withContext(
                  {
                    router: PropTypes.object,
                  },
                  () => ({
                    router: data.router,
                  }),
                )(props => <div {...props} />)

                return (
                    <data.Comp key={key}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      transform: `translateY(${translateY}px) scale(${scale}, ${scale})`,
                      opacity,
                    }}
                    animationState={animationState.state}  />
                //   <PreservedRouterContext
                //     key={key}
                //     style={{
                //       position: 'absolute',
                //       top: 0,
                //       right: 0,
                //       bottom: 0,
                //       left: 0,
                //       transform: `translateY(${translateY}px) scale(${scale}, ${scale})`,
                //       opacity,
                //     }}
                //   >
                //     <data.Comp  />
                //   </PreservedRouterContext>
                )
              })}
            </div>
          )}
        </NodeGroup>
        )
    }
}