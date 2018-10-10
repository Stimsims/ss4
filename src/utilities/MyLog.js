import validate from 'validate.js';
const levels = ['log', 'warn', 'error'];

export const log = (level, log, obj) => {
    if(validate.contains(levels, level)){
        if(validate.isDefined(obj)){
            console[level](log, obj);
        }else{
            console[level](log);
        }    
    }
}

export const style = (log, color) => {
    console.log(`%c ${log}`, `color: ${color}; font-weight: bold`);
}

export  const table = (objs) => {
    console.table(objs);
}

export const trace = (log) => {
    console.trace(log);
}
//export default {log, style};