import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Button from './../components/views/Button.jsx';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        onInput: jest.fn(), 
        text:'test test',
        vId: 'value',
        kId: 'key'
    };

    const enzymeWrapper = mount(<Button {...props} />);
    return {
      props,
      enzymeWrapper
    }
}
describe('components', () => {
    describe('Button', () => {
        it('should render text', () => {
            const { enzymeWrapper } = setup();
            console.log("button wrapper");
            console.log(enzymeWrapper);
            expect(enzymeWrapper.find('button').text()).toBe(' test test')
        })
        it('should return an input obj on click', () => {
            const { enzymeWrapper, props } = setup()
            const input = enzymeWrapper.find('button')
            expect(props.onInput.mock.calls.length).toBe(0)
           // input.props().onClick()
            input.simulate('click');
            expect(props.onInput.mock.calls.length).toBe(1)
            expect(props.onInput.mock.calls[0][0]).toEqual({vId:'value', kId: 'key'});
          })
    })
})