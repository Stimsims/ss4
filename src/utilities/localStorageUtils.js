//get all files from storage matching a pattern

//extract information from those files

//group and return
export const getLocalhostIterator = () => {
    let localStorage = window.localStorage;
    let keys = Object.keys(localStorage);
    let index = -1;
    const iterator = {
        next(){
            index++;
            if(index <= keys.length){
                return {value: keys[index], done: false}
            }else{
                return {value: undefined, done: true}
            }
        }
    }
    return iterator;
}

//iterator has reference to local storage, next until done
export const getSavedGameIds = (iterator, regexp, modifier /* optional */) => {
    let results = [];
    let next = null;
    do{
        next = iterator.next();
        if(regexp.test(next.value)){
            //results.push({key:next.value.key, value:next.value.value});
            results.push(next.value);
        }
    }while(!next.done)

    let ids = results;
    if(modifier){
        ids = results.map(r => {
            return modifier(r);
        })
    }
    let unique = [];
    ids = ids.map(id => {
        if(unique.indexOf(id) === -1) unique.push(id);
    })

    console.log("local ids", unique);
    return unique;
}
//takes array of objects - props, fn to get name and returns array of objects with props
export const buildFiles = (ids, props, extra) => {
    let local = {};
    let ray = [];
    let localStorage = window.localStorage;
    ids.map(id => {
        if(!local[id]){
            local[id] = true;
            let o = {
                id,
                ...extra
            };
            props.map(p => {
                o[p.key] = localStorage.getItem(p.getName(id));
            })
            ray.push(o);
            // ray.push({
            //     id,
            //     date: localStorage.getItem(getMetaName(DATE,this.props.gamename, id)),
            //     desc: localStorage.getItem(getMetaName(DESC,this.props.gamename, id))
            // })
        }
    })
    console.log('build files result', ray);
    return ray;
}



/*
    getLocalFiles(){
        let localStorage = window.localStorage;

        let query = new RegExp("(" + this.props.gamename + "-A)");
        let results = [];
        for (var i in localStorage) {
            if (localStorage.hasOwnProperty(i)) {
            if (i.match(query)) {
                results.push({key:i,val:localStorage.getItem(i)});
            }
            }
        }
        //extract id from file string
        let ids = results.map(f => {
            let parts = f.key.split("-");
            return parts[1];
        });
        console.log("local ids", ids);
        if(ids){
            //put ids into state.local, pointing to obj with keys for date and desc getMetaName(meta, game, id)
            let local = {};
            ids.map(id => {
                if(!local[id]){
                    local[id] = {
                        date: localStorage.getItem(getMetaName(DATE,this.props.gamename, SAVE_NAME)),
                        desc: localStorage.getItem(getMetaName(DESC,this.props.gamename, SAVE_NAME))
                    }
                }
            })
            this.setState({
                local
            })
            console.log("local meta", local);
        }

    }
*/