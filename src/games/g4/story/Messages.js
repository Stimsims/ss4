

const constants = {
    message: (vId) => {
        return (
            {vId}
        )
    },
    item: (vId, item) => {
        return (
            {vId, item}
        )
    },
    answer: (vId, answers) => {
        return(
            {vId, ...answers}
        )
    }  
}

export default constants;