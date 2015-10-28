import Dispatcher from '../Dispatcher.js';
import Constants from'../Constants.js';

var Actions = {
  changeTile: function(tile) {
    Dispatcher.handleViewAction({
      actionType: Constants.CHANGE_TILE,
      item: tile
      })
  },

  playAgainClick: function() {
      Dispatcher.handleViewAction({
        actionType: Constants.PLAY_AGAIN
      })
  }
}


module.exports = Actions;
