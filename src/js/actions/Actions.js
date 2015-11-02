import Dispatcher from '../Dispatcher.js';
import Constants from'../Constants.js';

function Dispatch(actionType, data){
  Dispatcher.handleViewAction({actionType: actionType, data: data})
}

var Actions = {
  changeTile: function(tileIndex) {
    Dispatch(Constants.CHANGE_TILE, tileIndex);
  },

  playAgainClick: function() {
    Dispatch(Constants.PLAY_AGAIN);
  }
}


module.exports = Actions;
