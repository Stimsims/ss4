import React from 'react';
import {configure, shallow, mount, render} from 'enzyme';
import Button from './../Button.jsx';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
//test onInput is called when clicked
import theme from './../../theme.js';
const startTheme = theme();

configure({ adapter: new Adapter() })

describe('<Button />', ()=>{
    let wrapper=null, clickHolder=null;
    beforeEach(() => {
        clickHolder = sinon.spy();
        //if shallow, only styled wrapper gets built
        wrapper = mount(<ThemeProvider theme={startTheme}><Button onInput={clickHolder}>hello</Button></ThemeProvider>);
      //  console.log(wrapper.debug());
      });
    it('it makes a button', ()=>{
        expect(wrapper.find('button').length).toEqual(1); //finds by displayName apparently, or styled component
    })
    it('has a class name button', ()=>{
        expect(wrapper.find('button').hasClass('button')).toBe(true);
    })
    it('it fires onInput when clicked', ()=>{
        wrapper.find('button').simulate('click');
        expect(clickHolder.calledOnce).toBe(true);
    })
})
