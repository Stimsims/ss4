import * as actions from './../story/items/reducer.js';
import * as asteroidSample from './../story/items/asteroidSample.js';

describe('actions', () => {
    it('should create an action to add sample', () => {
      //const text = 'Finish docs'
      let sample = asteroidSample.createSample()
      const expectedAction = {
        type: 'ADD_ITEM',
        payload:{
            type: sample.type,
            id: sample.id,
            item: sample
        }
      }
      expect(actions.addItem(sample.type, sample.id, sample)).toEqual(expectedAction)
    })
  })