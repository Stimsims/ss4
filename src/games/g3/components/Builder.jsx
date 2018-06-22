import React from 'react';
import {constants, messages} from './../story/Constants.js';

const Builder = (View) => (onInput) => {
    const getChildView = (kId, fsm) => {
        return <View fsm={fsm} id={kId} onInput={onInput} builder={Builder(View)}  />
    }
    const getText = (key, text) => {
        return <p key={key}>{text}</p>
    }

    const getBtn = (kId, vId, text) => {
        return (
            <button key={kId} onClick={() => {
                onInput({[constants.input.kId]:kId, [constants.input.vId]:vId})
            }}>{text}</button>
        )
    }
    const getButtonSet = (id, buttons) => {
        return (
            <div key={id}>
                {buttons.map(b => {
                    return getBtn(id, b.id, b.text);
                })}
            </div>
        )
    }
    const describeBtn = (id, text) => {
        return {id, text}
    }
    return {
        getChildView, getText, getBtn, getButtonSet, describeBtn
    }
}
export default Builder;