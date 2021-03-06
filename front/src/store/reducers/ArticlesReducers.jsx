import * as Actions from "../actions/ActionTypes";

const initialState = {
    data: [],
    flash: {},
    listArticles: []
};

export function ArticlesReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
        case Actions.GET_ARTICLE:
            return {
                ...state,
                flash: action.payload.flash,
                listArticles: action.payload.dbArticles
            };
        case Actions.GETID_ARTICLE:
            return {
                ...state,
                flash: action.payload.flash,
                article: action.payload.article,
            };
        case Actions.POST_ARTICLE:
            return {
                ...state,
                flash: action.payload.flash,
                listArticles: action.payload.dbArticles,
            };
        case Actions.EDIT_ARTICLE:
            return {
                ...state,
                flash: action.payload.flash,
                listArticles: action.payload.dbArticles,
            };
        case Actions.DELETE_ARTICLE:
            return {
                ...state,
                flash: action.payload.flash,
                listArticles: action.payload.dbArticles,
            };
    }
}
