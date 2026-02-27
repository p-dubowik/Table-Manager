import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesReducer from './tablesRedux';
import { updateTables } from './tablesRedux';
import uiReducer from './uiRedux';
import { setLoading } from './uiRedux';

//
export const fetchData = () => {
    return (dispatch) => {
      dispatch(setLoading(true))

        fetch('/api/tables')
        .then(res => res.json())
        .then(tables => {
          dispatch(updateTables(tables));
          dispatch(setLoading(false));
        })
        .catch(()=> dispatch(setLoading(false)))
    };
};

//REDUCER
const subreducers ={
    tables: tablesReducer,
    ui: uiReducer
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;