import Dispatcher from '../Dispatcher.js';
import Constants from'../Constants.js';

const Dispatch = (actionType, data) => {
  Dispatcher.handleViewAction({actionType: actionType, data: data})
}

const Actions = {
  changeTile(tileIndex) {
    Dispatch(Constants.CHANGE_TILE, tileIndex);
  },

  playAgainClick() {
    Dispatch(Constants.PLAY_AGAIN);
  }
}


export default Actions;
