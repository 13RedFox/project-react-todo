import { ADD_FOLDER, ADD_TODO, REMOVE_FOLDER, SET_FOLDER } from '../actions/actions';

export const db = [
  {
    name: 'Products',
    id: 0,
    isActive: false,
    color: '#42b883',
    todos: [
      { name: 'Изучить JavaScript1', id: 1, isDone: false },
      { name: 'Изучить JavaScript2', id: 2, isDone: false },
    ],
  },
  {
    name: 'Cars',
    id: 1,
    isActive: false,
    color: '#42b883',
    todos: [
      { name: 'Изучить JavaScript3', id: 1, isDone: false },
      { name: 'Изучить JavaScript4', id: 2, isDone: false },
    ],
  },
];

export const folderReducer = (state = db, action: any) => {
  switch (action.type) {
    case ADD_FOLDER: {
      return [...state, action.payload];
    }
    case SET_FOLDER: {
      return action.payload;
    }
    case REMOVE_FOLDER: {
      // const newArr = [...action.payload];
      // return newArr;
      // return action.payload;
      return action.payload;
    }
    case ADD_TODO: {
      return null;
    }
    default:
      return state;
  }
};
