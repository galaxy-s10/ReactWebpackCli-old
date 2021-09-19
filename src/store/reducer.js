// import { combineReducers } from 'redux-immutable';
// import { reducer as homeReducer } from '../pages/home/store';
import { combineReducers } from 'redux';

const appState = {
  version: '1.0.0',
  lastUpdate: '2021年09月01日',
};

const appReducer = function (state = appState, action) {
  switch (action.type) {
    case 'app':
      console.log('执行redux action: changeNowPreview');
      console.log(action);
      return { ...state, nowPreview: 11 };
    default:
      return state;
  }
};

const Reducer = combineReducers({
  app: appReducer,
  // home: homeReducer,
});

export default Reducer;
