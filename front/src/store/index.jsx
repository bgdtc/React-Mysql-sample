import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ArticlesReducer } from "./reducers/ArticlesReducers";


const rootReducer = combineReducers({
    articles: ArticlesReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Dev