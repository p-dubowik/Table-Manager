import createActionName from '../utils/createActionName';

//selectors
export const getAllTables = state => state.tables;
export const getTableById = (state, id) =>
  state.tables.find(t => t.id === Number(id)) || null;


//action names
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

//action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload});

//
export const fetchTables = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/api/tables')
        .then(res => res.json())
        .then(tables => dispatch(updateTables(tables)));
    };
};

//REDUCER
const tablesReducer = (statePart = [], action) => {
    switch(action.type) {
    case UPDATE_TABLES:
        return [...action.payload];
    default:
        return statePart;
    }
}

export default tablesReducer;