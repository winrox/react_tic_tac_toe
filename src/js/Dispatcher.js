import {Dispatcher} from 'flux';
import Constants from './Constants';
import Assign from 'object-assign';

const AppDispatcher = Assign(new Dispatcher(), {
  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
