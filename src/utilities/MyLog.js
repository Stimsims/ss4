import validate from 'validate.js';
const levels = ['log', 'warn', 'error'];
const MyLog = (level, log, obj) => {
    if(validate.contains(levels, level)){
        if(validate.isDefined(obj)){
            console[level](log, obj);
        }else{
            console[level](log);
        }    
    }
}
export default MyLog;