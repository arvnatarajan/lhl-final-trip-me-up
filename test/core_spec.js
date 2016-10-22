import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setTrips, next, vote} from '../src/core';

describe('application logic', () => {

  describe('setTrips', () => {

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

    it('takes the next two trips', () => {
      const state = Map({
        trips: List.of('trip 1', 'trip 2', 'trip 3')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        subset: Map({
          pair: List.of('trip 1', 'trip 2')
        }),
        trips: List.of('trip 3')
      }));
    });

  });

  describe('vote', () => {

    it('creates a tally for the voted entry', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later')
        }),
        entries: List()
      });
      const nextState = vote(state, 'Trainspotting');
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 1
          })
        }),
        entries: List()
      }));
    });

    it('adds to existing tally for the voted entry', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 3,
            '28 Days Later': 2
          })
        }),
        entries: List()
      });
      const nextState = vote(state, 'Trainspotting');
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 4,
            '28 Days Later': 2
          })
        }),
        entries: List()
      }));
    });

  });


});
