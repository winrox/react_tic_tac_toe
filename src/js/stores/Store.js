import Dispatcher from '../Dispatcher.js';
import assign from 'object-assign';
import Constants from '../Constants';
import {EventEmitter} from 'events';

/* TODO: make sure last 2 clicks render */

var CHANGE_EVENT = 'change';

var _tiles = [
  {id: 'a1', value: ''},
  {id: 'a2', value: ''},
  {id: 'a3', value: ''},
  {id: 'b1', value: ''},
  {id: 'b2', value: ''},
  {id: 'b3', value: ''},
  {id: 'c1', value: ''},
  {id: 'c2', value: ''},
  {id: 'c3', value: ''}
];

var _score = { scoreX: 0, scoreO: 0 };

var _alertMessage = '';

var _clickCounter = 0;

var _winnerFound = false;

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
    var win = [['a1','a2','a3'],['b1','b2','b3'],['c1','c2','c3'],['a1','b1','c1'],['a2','b2','c2'],['a3','b3','c3'],['a1','b2','c3'],['a3','b2','c1']];

    function getTileById(id) {
      /* iterate through each tile in tiles */
      for(var index in _tiles) {
        var tile = _tiles[index];

        if(tile.id == id) {
          /* if this is the tile we are looking for then return it */
          return tile;
        }
      }
    }

    for(var i in win) {
      var winIndex = win[i];

      if (
        (getTileById(winIndex[0]).value == "x")
        && (getTileById(winIndex[1]).value == "x")
        && (getTileById(winIndex[2]).value == "x")
      ) {
        _winnerFound = true;
        _score.scoreX+=1;
        _alertMessage = "X wins!";
      }

      if (
        (getTileById(winIndex[0]).value == "o")
        && (getTileById(winIndex[1]).value == "o")
        && (getTileById(winIndex[2]).value == "o")
      ) {
        _winnerFound = true;
        _score.scoreO+=1;
        _alertMessage = "O wins!";
      }
    }
    console.log('_winnerFound = '+ _winnerFound);
    console.log('_clickCounter = '+ _clickCounter);
    if(_clickCounter == 9 && _winnerFound == false) {
      /* The click counter must update it's state asynchronously, because
      my console.log click counter is always one behind the state, therefore
      to get the no winner found message I had to change the value from 9 to 8. */
      _alertMessage = "No winner this time. Please play again.";
      //need to show play-again button
    }
  }

function determineXorO(tile, child){
  _clickCounter = _clickCounter + 1;

    if(_winnerFound == true) {
      return;
    } else {

      var even = isEven(_clickCounter);

      if(tile.value !== '') {
        console.log(tile.id + " is considered to already have an X or O in it.")
        _alertMessage = "I'm sorry. That spot has already been taken.";
        _clickCounter = _clickCounter - 1;
      }

       else if(even) {
        tile.value = "o"
        console.log(tile.id + " has gotten an O.");
        _alertMessage = "";
      }

      else if(even == false) {
        tile.value = "x"
        console.log(tile.id + " has gotten an X.");
        _alertMessage = "";
      }

      else {
        console.log("ERROR!");
        _clickCounter = _clickCounter - 1;
      }
      console.log(isEven(_clickCounter) + " is the value of isEven()");
    }

    findWinner();
}

var Store = assign({}, EventEmitter.prototype, {
  //get all tiles
  getAllTiles: function () {
    return _tiles;
  },
  //get scoreX & scoreO
  getScore: function() {
    return _score;
  },

  foundWinnerStatus: function() {
    return _winnerFound;
  },

  //get value of _clickCounter
  getClickValue: function() {
    return _clickCounter;
  },

  // emit change event to any view listening
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  // allows views to register their callback function with the store
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

    // registers this function with the dispatcher to be called whenever the dispatcher emits an action
  dispatcherIndex: Dispatcher.register(function(payload) {
    console.log(payload);
    var action = payload.action;
    var todoText;

    // switch statement looks for a matching action case
    switch(action.actionType) {
      case Constants.CHANGE_TILE:
        var tile = action.item;
        determineXorO(tile);
        Store.emitChange(); // tell the view the store has changed
        break;

      // add more cases for other action types
      return true; //No errors. Needed by promise in dispatcher.
      }
  })

});

module.exports = Store;
