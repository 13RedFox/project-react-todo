import { ADD_FOLDER, ADD_TODO } from '../actions/actions';

export const folderReducer = (state = [], action: any) => {
  switch (action.type) {
    case ADD_FOLDER: {
      return [...state, action.payload];
    }
    case ADD_TODO: {
      return null;
    }
    default:
      return state;
  }
};
