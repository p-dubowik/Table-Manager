import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesReducer from './tablesRedux';
import { updateTables } from './tablesRedux';
import uiReducer from './uiRedux';
import { setLoading } from './uiRedux';

//
export const fetchData = () => {

    const API = "https://table-manager-api-8e2z.onrender.com/api/tables"
    return (dispatch) => {
      dispatch(setLoading(true))

        fetch(API)
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

const composeEnhancers =
  (typeof window !== 'undefined' &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;