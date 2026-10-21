const initialState = {
    movies: []
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                movies: [...state.movies, action.data]
            };

        default:
            return state;
    }
};

export default Reducer;