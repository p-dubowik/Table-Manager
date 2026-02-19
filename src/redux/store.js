import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


//selectors


//action names
const createActionName = name => `app/tables/${name}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

//action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload});

export const fetchTables = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/api/tables')
        .then(res => res.json())
        .then(tables => dispatch(updateTables(tables)));
    };
};

const reducer = (state, action) => {

    switch(action.type) {
        case UPDATE_TABLES:
            return {...state, tables: action.payload};
        default:
            return state;
    }

};

const initialState = {
  tables: []
};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;