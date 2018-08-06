import ReactGA from 'react-ga';

var isListening = false;
var errors = [];

const logError = (message, source, lineNum, colNum, errorObj) => {
    console.log("logError src", source);
    console.log("logError obj ", errorObj);
    console.log("logError msg", message);
    if(isListening){
        //console.log(`logging error ${errors.message}`);
        console.warn(`logging error: message ${message} source: ${source.componentStack} lineNum ${lineNum}`, source);
        try{
            // ReactGA.event({
            //     category: 'error',
            //     action: `${message}`,
            //     value: `message ${message} source: ${source.componentStack} lineNum ${lineNum}`
            // });
            ReactGA.exception({
                description: `message ${message} source: ${source.componentStack} lineNum ${lineNum}`
            })
        }catch(e){
            console.warn('reactGa not available, not sending error');
        }
    }else{
        if(errors.length < 10){
            errors.push(error);
        }
    }
}

if (typeof window !== 'undefined') {
    console.log("error, window is defined, adding listener");
    window.onerror = function(message, source, lineNum, colNum, errorObj){
        //can bubble up without explicit MyError call()
        //console.warn(`onerror details: message ${message} source: ${source} lineNum ${lineNum}`, errorObj);
        logError(message, source, lineNum, colNum, errorObj)
       
        // window.location.href = (
        //     `http://stackoverflow.com/search?q=[js]${message}`
        // )
        return true; //prevents users from seeing in console
        //false creates uncaught error and a stack trace
    }
    window.addEventListener('error', function(event) {
        console.warn("addEventListener caught ", event);
        return true; 
    })
    isListening = true;
    //catch any stored errors now that they will be caught
    errors.map(e =>{
        logError(e);
    })
    errors = [];
}else{
    console.log("error, window is undefined, cannot listen");
}

export default logError;

/*
    successfully bubbles up an error from inside a react component
    setTimeout(()=>{
      console.log("timeout, divide by zero now");
      try{
        let fail = 10/0;
        console.log("app try succeeded in dividing by 0 " + fail);
        throw new Error('divided by zero');
      }catch(e){
        console.log("app catch block failed to divide by 0", e);
        //throw obvious error, shouldnt show up in production build?
        throw e;
      }
    }, 5000);

*/