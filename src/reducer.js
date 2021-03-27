export const initialState = {
    news: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NEWS":
            return { ...state, news: action.payload };
        case "ADD_TO_NEWS":
            return {
                ...state,
                news: [...state.news, action.item],
            };
        case "REMOVE_FROM_NEWS":
            const index = state.news.findIndex((item) => item.id === action.id);
            let newNews = [...state.news];

            if (index >= 0) {
                newNews.splice(index, 1);
            }
            return {
                ...state,
                news: newNews,
            };

        default:
            return state;
    }
};

export default reducer;