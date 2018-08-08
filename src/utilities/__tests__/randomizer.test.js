import {getRandomItem} from './../randomizer.js';

describe('it generates random items', () => {
    test('it gets a random array item', ()=>{
        let testRay = [1,2,3];
        let result = getRandomItem(testRay);
        let elemIndex = testRay.indexOf(result);
        expect(elemIndex).not.toBe(-1);
    })
})