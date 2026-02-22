import createActionName from "../utils/createActionName";

//selectors
export const getLoading = state => state.ui.loading;

//action names
const SET_LOADING = createActionName("SET_LOADING");

//action creators
export const setLoading = payload => ({type: SET_LOADING, payload});

const initialState = { loading: true}

const uiReducer = (statePart = initialState, action) => {
    switch(action.type){
        case SET_LOADING:
            return {
                ...statePart,
                loading: action.payload    
            }
        default:
            return statePart;
    }
};

export default uiReducer;