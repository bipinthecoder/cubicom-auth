import {reducer} from "./reducer";
import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

console.log(store.getState());