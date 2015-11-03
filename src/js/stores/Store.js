import Dispatcher from '../Dispatcher.js';
import assign from 'object-assign';
import Constants from '../Constants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _tiles = ['','','','','','','','',''];

let _score = { scoreX: 0, scoreO: 0 };

let _alertMessage = '';

let _clickCounter = 0;

let _winnerFound = false;

/* -----tile click functions----- */

function determineXorO(tileIndex) {
  _clickCounter = _clickCounter + 1;

    if(_winnerFound == true) {
      return;
    } else {

      const even = isEven(_clickCounter);

      if(_tiles[tileIndex] !== '') {
        _alertMessage = "I'm sorry. That spot has already been taken.";
        _clickCounter = _clickCounter - 1;
      }

       else if(even) {
        _tiles[tileIndex] = 'o';
        _alertMessage = "";
      }

      else if(even == false) {
        _tiles[tileIndex] = 'x';
        _alertMessage = "";
      }

      else {
        console.log("ERROR!");
        _clickCounter = _clickCounter - 1;
      }
    }

    findWinner();
}

function isEven(num) {
  if (num === 0){
    return true;
  } else if(num === 1) {
    return false;
  } else if(num < 0) {
    return isEven(num + 2);
  }
  else {
    return isEven(num - 2);
  }
}

function findWinner(){
  const win = [[_tiles[0],_tiles[1],_tiles[2]],[_tiles[3],_tiles[4],_tiles[5]],[_tiles[6],_tiles[7],_tiles[8]],[_tiles[0],_tiles[3],_tiles[6]],
  [_tiles[1],_tiles[4],_tiles[7]],[_tiles[2],_tiles[5],_tiles[8]],[_tiles[0],_tiles[4],_tiles[8]],[_tiles[2],_tiles[4],_tiles[6]]];

  for(let i in win) {
    const winIndex = win[i];

    if (
      (winIndex[0] == "x")
      && (winIndex[1] == "x")
      && (winIndex[2] == "x")
    ) {
      _winnerFound = true;
      _score.scoreX+=1;
      _alertMessage = "X wins!";
    }

    if (
      (winIndex[0] == "o")
      && (winIndex[1] == "o")
      && (winIndex[2] == "o")
    ) {
      _winnerFound = true;
      _score.scoreO+=1;
      _alertMessage = "O wins!";
    }
  }

  if(_clickCounter == 9 && _winnerFound == false) {
    _alertMessage = "No winner this time. Please play again.";
  }
}

/* -----Play Again button click functions----- */

function clearGame() {
  /* iterate through each tile in tiles */
  for(let index in _tiles) {
    _tiles[index] = '';
  }
}

function playAgain() {
  clearGame();
  _alertMessage = "";
  _winnerFound = false;
  _clickCounter = 0;
}

/* --------STORE BEGINS-------- */

const Store = assign({}, EventEmitter.prototype, {

  getState() {
    return({tiles: _tiles,
      score: _score,
      foundWinner: _winnerFound,
      clickCounter: _clickCounter,
      message: _alertMessage});
  },

  // emit change event to any view listening
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  // allows views to register their callback function with the store
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

    // registers this function with the dispatcher to be called whenever the dispatcher emits an action
  dispatcherIndex: Dispatcher.register((payload) => {
    console.log(payload);
    const action = payload.action;

    // switch statement looks for a matching action case
    switch(action.actionType) {
      case Constants.CHANGE_TILE:
        const tileIndex = action.data;
        determineXorO(tileIndex);
        Store.emitChange(); // tell the view the store has changed
        break;

        case Constants.PLAY_AGAIN:
          playAgain();
          Store.emitChange();
          break;
      // add more cases for other action types
      return true; //No errors. Needed by promise in dispatcher.
      }
  })

});

module.exports = Store;
