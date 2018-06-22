import React from 'react';
import View from './views.jsx';

export function getView(id, story){
    return <View id={id} story={story} />
}
