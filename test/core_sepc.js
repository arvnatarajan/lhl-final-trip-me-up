import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setTrips, next} from '../src/core';

describe('application logic', () => {

  describe('setEntries', () => {

    it('adds the trips to the state', () => {
      const state = Map();
      const trips = ['trip 1', 'trip 2'];
      const nextState = setTrips(state, trips);
      expect(nextState).to.equal(Map({
        trips: List.of('trip 1', 'trip 2')
      }));
    });

  });

  describe('next', () => {

    it('takes the next two trips under vote', () => {
      const state = Map({
        entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later')
        }),
        entries: List.of('Sunshine')
      }));
    });

  });


});
