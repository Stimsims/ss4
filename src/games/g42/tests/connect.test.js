import React from 'react';
import { Lounge } from './../story/fsm/zones/Lounge.jsx';
import { selectFsmState } from './../story/fsm/selectors.js';
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
    const initialState = {lounge: {state: 'S_IN'}}
    const mockStore = configureStore();
    let store = store = mockStore(initialState);
    // jest.mock('./../story/fsm/selectors.js', ()=> ({
    //     selectFsmState: () => {return {lounge: {state: 'S_IN'}}}
    //   }))
    const props = {
        factory: jest.fn(),
        fsm:{state: 'S_IN'}
    };
    props.factory.mockReturnValue({component: () => { return(<p>hello</p>) }})

    const enzymeWrapper = mount(<Provider store={store} ><Lounge {...props} /></Provider>);

    return {
        store,
      props,
      enzymeWrapper
    }
}

describe('connected', () => {
    // beforeEach(()=>{
    //     //wrapper = shallow(<Lounge />)  
    //     const { enzymeWrapper } = setup();
    // })
    it('render the Lounge component', () => {
        const { enzymeWrapper, store } = setup();
       // selectFsmState.mockResolvedValue({lounge: {state: 'S_IN'}});
        
        // console.log("enzyme connect wrapper");
        // console.log(enzymeWrapper);
        expect(enzymeWrapper.length).toEqual(1)
        console.log("fsm lounge enzyme wrapper");
        console.log(enzymeWrapper);
        //expect(store.getState().lounge.state).toEqual('S_IN')
     });
})
//selectFsmState
//import {selectFsmState} from './../selectors.js';