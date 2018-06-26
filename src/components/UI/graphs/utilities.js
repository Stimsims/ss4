export const getAxisLabels = (labels) => {
    return labels.map(e => {
        return {name: `${e}`, series: `${e}`}
    })
}