
//takes a key, returns its FSM
import React from 'react';
import {getView, key as kStart} from './start/index.js';

export const keys = {
    [Start.key]: Start.key
}

export function getStory(key){
    switch(key){
        default:
            return Start;
    }
}