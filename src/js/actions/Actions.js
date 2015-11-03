import Dispatcher from '../Dispatcher.js';
import Constants from'../Constants.js';

function Dispatch(actionType, data){
  Dispatcher.handleViewAction({actionType: actionType, data: data})
}

var Actions = {
  changeTile(tileIndex) {
    Dispatch(Constants.CHANGE_TILE, tileIndex);
  },

  playAgainClick() {
    Dispatch(Constants.PLAY_AGAIN);
  }
}


module.exports = Actions;
