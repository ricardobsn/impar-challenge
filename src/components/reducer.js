export const initialState = {
    news: {
        title: "",
        description: "",
        uf: "",
        city: "",
        dateNews: ""
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NEWS":
            return { ...state, news: action.news };
        default:
            return state;
    }
};

export default reducer;