//pass in pathname, determines className
import React from 'react';
import {configure, shallow, mount, render} from 'enzyme';
import {MemoryRouter} from 'react-router';
import {Menu} from './../Ma.jsx';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import {ThemeProvider} from 'styled-components';
//test onInput is called when clicked
import theme from './../../UI/theme.js';
const startTheme = theme();

configure({ adapter: new Adapter() })

const getComponent = (location) => {
    return mount(
        <ThemeProvider theme={startTheme}>
            <MemoryRouter initialEntries={[ name ]}>
                <Menu location={location} />
            </MemoryRouter>
        </ThemeProvider>
    );
}
describe('<Menu />', ()=>{
    let wrapper=null;
    let location = {
        pathname: '/'
    }
    it('has correct classname .minimize when at /games/samplegame', ()=>{
        let name ='/games/samplegame';
        location.pathname=name;
        wrapper = getComponent(location);        
        expect(wrapper.find('.minimize').length).toEqual(2); //because styled components duplicates props across name tag and html tag
    })
    it('has does not have classname .minimize when at /games', ()=>{
        let name ='/games';
        location.pathname=name;
        wrapper = getComponent(location);  
        expect(wrapper.find('.minimize').length).toEqual(0); //because styled components duplicates props across name tag and html tag
    })
    it('has does not have classname .minimize when at /posts/hello', ()=>{
        let name ='/posts/hello';
        location.pathname=name;
        wrapper = getComponent(location);  
        expect(wrapper.find('.minimize').length).toEqual(0); //because styled components duplicates props across name tag and html tag
    })
    it('has does not have classname .minimize when at /', ()=>{
        let name ='/';
        location.pathname=name;
        wrapper = getComponent(location);  
        expect(wrapper.find('.minimize').length).toEqual(0); //because styled components duplicates props across name tag and html tag
    })

})