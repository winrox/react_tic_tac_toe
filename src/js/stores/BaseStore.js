import Dispatcher from '../dispatcher/dispatcher.js';
import assign from 'object-assign';
import Constants from '../Constants';
import {EventEmitter} from 'events';

var tiles= [
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

var scoreX = 0;

var scoreO = 0;

var alertMessage = '';

var clickCounter = 0;

var winnerFound = false;

var Store = assign({}, EventEmitter.prototype, {
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
      // case Constants.ADD_ITEM:
      //   todoText = action.item.trim(); //removes white space from beginning and end of todoText
      //   if(todoText !== '') {
      //     add(todoText); // puts the todo item into the store
      //     console.log(todos);
      //     Store.emitChange(); // tell the view the store has changed
      //     break;
        }

      // add more cases for other action types
      return true; //No errors. Needed by promise in dispatcher.
    }
  })

});

module.exports = Store;
