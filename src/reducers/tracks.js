
import { SET_TRACKS, ADD_TRACKS } from '../utils/constants';

const tracksReducer = (state = {}, action) => {
  const { track } = action;
  switch (action.type) {
    case SET_TRACKS:
      return track;
    case ADD_TRACKS:
      return {
        ...state,
        next: track.next,
        items: [...state.items, ...track.items]
      };
    default:
      return state;
  }
};

export default tracksReducer;
