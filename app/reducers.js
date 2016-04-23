import { combineReducers } from 'redux';
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  visibilityFilters
} from './action';

const { SHOW_ALL } = visibilityFilters;

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          text: action.text,
          completed: false
        },
        ...state
      ]
    case COMPLETE_TODO:
      return state.map((todo, id) => {
        if (id === action.id) {
          return Object.assign(
            {},
            todo,
            { completed: true }
          )
        }
        return todo;
      })
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
