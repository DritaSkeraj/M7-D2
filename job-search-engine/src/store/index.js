import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import favoriteReducer from '../reducers/favorites';
import searchReducer from '../reducers/searched'
import thunk from 'redux-thunk'

const composedEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const intitialState = {
    favorites: [],
    searched: []
}

const bigReducer = combineReducers({ favorites: favoriteReducer, searched: searchReducer})

export default function configureStore() {
    return createStore(
        bigReducer,
        intitialState,
        composedEnhacer(applyMiddleware(thunk))
    )
}