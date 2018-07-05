//import constants from './Constants.js';

const constants = {
    message: (kId) => {
        return (
            {kId}
        )
    },
    item: (kId, item) => {
        return (
            {kId, item}
        )
    },
    answer: (kId, answers) => {
        return(
            {kId, ...answers}
        )
    }  
}

export default constants;