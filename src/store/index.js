import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
import { userReducer } from "./userReducer";
// const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ user: userReducer }),
    applyMiddleware(thunk)
    // applyMiddleware(sagaMiddleware)
);
// sagaMiddleware.run(loginSaga);
export default store;
