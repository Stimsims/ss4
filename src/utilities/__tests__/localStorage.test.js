//getSavedGameIds = (query, extractor) 
import {getSavedGameIds} from './../localStorageUtils.js';

describe('local storage utils', () => {
    let variable = 'omg';
    let iterable = {
        iterator(){
            let step = 0;
            const iterator = {
                next(){
                    step++;
                    if(step === 1){
                        return {value: `${variable}-hello`, done: false}
                    }else if(step === 2){
                        return {value: `${variable}-world`, done: false}
                    }
                    return {value: undefined, done: true}
                }
            }
            return iterator;
        }
    }
    it('correctly gets values from an iterator', () => {
        let query = new RegExp('(omg-hello)$');
        let result = getSavedGameIds(iterable.iterator(), query);
        expect(result).toEqual(['omg-hello'])
    })
    it('correctly gets multiple values from an iterator', () => {
        let query = new RegExp(`${variable}-(hello|world)$`);
        let result = getSavedGameIds(iterable.iterator(), query);
        expect(result).toEqual([`${variable}-hello`, `${variable}-world`])
    })
    it('correctly gets modifies retrieved values', () => {
        let query = new RegExp('(omg-hello)$');
        let modifier = (item) => {return item[0]}
        let result = getSavedGameIds(iterable.iterator(), query, modifier);
        expect(result).toEqual(['o'])
    })
    it('regex correctly validates iterator values', () => {
        let query = new RegExp('(omg-hello)$');
        let result = getSavedGameIds(iterable.iterator(), query);
        expect(result).toEqual(['omg-hello'])


        query = new RegExp(`${variable}-(hello|world)$`);
        expect(query.test(`${variable}-hello`)).toBe(true);
        expect(query.test(`DESC:${variable}-hello`)).toBe(true);
        expect(query.test(`${variable}-h`)).toBe(false);
        expect(query.test(`${variable}-hellos`)).toBe(false);
        expect(query.test(`${variable}-hello-hi`)).toBe(false);
        expect(query.test(`hello`)).toBe(false);

        query = new RegExp(`${variable}-(hello|world)s$`);
        result = getSavedGameIds(iterable.iterator(), query);
        expect(result).toEqual([])
        
        query = new RegExp(`${variable}-hell$`);
        result = getSavedGameIds(iterable.iterator(), query);
        expect(result).toEqual([])

        query = new RegExp(`${variable}`);
        result = getSavedGameIds(iterable.iterator(), query);
        expect(result).toEqual(['omg-hello', 'omg-world'])
        
        query = new RegExp(`${variable}-`);
        result = getSavedGameIds(iterable.iterator(), query);
        expect(result).toEqual(['omg-hello', 'omg-world'])
        
        query = new RegExp(`${variable}-h`);
        result = getSavedGameIds(iterable.iterator(), query);
        expect(result).toEqual(['omg-hello'])

        
        query = new RegExp(`${variable}-o`);
        result = getSavedGameIds(iterable.iterator(), query);
        expect(result).toEqual([])
    })
})