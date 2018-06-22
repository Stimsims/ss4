import React from 'react';
import {constants, messages} from './../story/Constants.js';
import styled from 'styled-components';

const Builder = (View) => (onInput) => {
    const getChildView = (kId, fsm) => {
        return <View fsm={fsm} id={kId} onInput={onInput} builder={Builder(View)}  />
    }
    const getText = (key, text) => {
        return <p key={key}>{text}</p>
    }
    const getLink = (kId, vId, text) => {
        return <a onClick={()=>{
            onInput({[constants.input.kId]:kId, [constants.input.vId]:vId})
        }}>{text}</a>
    }
    const getBtn = (kId, vId, text, disabled = false) => {
        console.log("getBtn disabled " + disabled);
        if(disabled){
            return (
                <BtnDisabled key={kId} disabled={disabled}>{text}</BtnDisabled>
            )
        }else{
            return (
                <Btn key={kId} onClick={() => {
                    onInput({[constants.input.kId]:kId, [constants.input.vId]:vId})
                }}>{text}</Btn>
            )
        }
    }
    const getButtonSet = (id, buttons) => {
        return (
            <div key={id}>
                {buttons.map(b => {
                    return getBtn(id, b.id, b.text, b.disable);
                })}
            </div>
        )
    }
    const describeBtn = (id, text, disable) => {
        return {id, text, disable}
    }
    return {
        getChildView, getText, getBtn, getLink, getButtonSet, describeBtn
    }
}
export default Builder;

const BtnDisabled = styled.div`
    padding: 10px;
    background: red;
    color:white;
    margin: 5px;
`
const Btn = styled.div`
    padding: 10px;
    background: grey;
    color:white;
    margin: 5px;
    transition: all 0.3s ease-in;
    &:hover{
        background: pink;
    }
`