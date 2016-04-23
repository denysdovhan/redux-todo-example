// Todo
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// FIlters
export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DONE: 'SHOW_DONE',
  SHOW_UNDONE: 'SHOW_UNDONE'
}

// Actions

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
