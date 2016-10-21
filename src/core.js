import {List} from 'immutable';

export function setTrips(state, trips) {
  return state.set('trips', List(trips));
}
