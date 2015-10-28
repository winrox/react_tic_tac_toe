import {Dispatcher} from 'flux';
import Constants from './Constants';
import Assign from 'object-assign';

var AppDispatcher = Assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;