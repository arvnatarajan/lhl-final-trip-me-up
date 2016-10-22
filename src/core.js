import {List, Map} from 'immutable';

export function setTrips(state, trips) {
  return state.set('trips', List(trips));
}

export function next(state) {
  const trips = state.get('trips');
  return state.merge({
    subset: Map({pair: trips.take(2)}),
    trips: trips.skip(2)
  });
}

export function vote(state, entry) {
  return state.updateIn(
    ['vote', 'tally', entry],
    0,
    tally => tally + 1
  );
}
