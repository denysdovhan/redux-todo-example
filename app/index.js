import { createStore } from 'redux';
import todoApp from './reducers';
import { addTodo, completeTodo, setVisibilityFilter, visibilityFilters } from './action';

let store = createStore(todoApp);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTodo('lol'));
store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_DONE));
store.dispatch(completeTodo(0));

unsubscribe();
