import React from 'react'
import universal from 'react-universal-component'

const Failed = () => (
  <div style={{ color: 'red' }}>
    <h1>Failed to load the heavy component!</h1>
  </div>
)

const Loading = () => (
  <div style={{ color: 'yellow' }}>
    <h1>Loading this heavy component...</h1>
  </div>
)

// const MyComponent = universal(import('./FatComponent.jsx'), {
//   loading: Loading,
//   error: Failed,
// })

// export const preloadMyComponent = () => MyComponent.preload()
// export default props => <MyComponent {...props} />
//<this.state.component {...this.props} />


class Dynamic extends React.Component{
    constructor(props){
        super(props);
        console.log("dynamic component constructor " + this.props.payload);

        let component = universal(import(`${this.props.payload}`), {
            loading: Loading,
            error: Failed,
        });
        this.state = {
            component
        }
    }
    render(){
        return(
            <div>
                <this.state.component {...this.props} />
            </div>
        )
    }
}
export default Dynamic;