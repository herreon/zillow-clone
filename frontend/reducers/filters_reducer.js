import { UPDATE_BOUNDS } from '../actions/filter_actions';
// import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    bounds: {},
    // minSeating: 1,
    // maxSeating: 10
});

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    if (action.type === UPDATE_BOUNDS) {
        // const newFilter = {
        //     [action.filter]: action.value
        // };
        return Object.assign({}, state, action.bounds);
    } else {
        return state;
    }
};

export default filtersReducer;
