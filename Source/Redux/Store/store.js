import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import HomeScreenReducers from '../HomeScreenRedux/Reducers/HomeScreenReducers';

// Add all your reduce it can be multiple for each modules
const reducers = combineReducers({
    HomeScreen: HomeScreenReducers,
});

const Store = configureStore({
    reducer: reducers,
    
});

export { Store };
