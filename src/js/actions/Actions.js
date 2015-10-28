import Dispatcher from '../Dispatcher.js';
import Constants from'../Constants.js';

var Actions = {
  changeTile: function(tile) {
    Dispatcher.handleViewAction({
      actionType: Constants.CHANGE_TILE,
      item: tile
      })
    }
}


module.exports = Actions;
