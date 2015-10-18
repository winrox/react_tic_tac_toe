var React = require('react');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var Message = require('./message');
var ScoreBoard = require('./scoreboard');
var GameBoard = require('./game_board');
var Tile = require('./tile');
var rootUrl = 'https://react-tic-tac-toe.firebaseio.com//';

var App = React.createClass({
  mixins: [ ReactFire ], // this allows you to use any methods from ReacFire (bindAsObject here)

  getInitialState: function() {
    return {
      winnerFound: false,
      loaded: false,
      items: {},
      scoreX: 0,
      scoreY: 0
    }
  },

  // componentWillMount: function(){
  //   this.fireBase = new FireBase(rootUrl + 'items/'); //new instance of firebase
  //   this.bindAsObject(this.fireBase, 'items'); //get/set info in db items
  //   this.fireBase.on('value', this.handleDataLoaded); //lets us listen to firebase value event
  //   // this.fireBase.on("child_added", function(items) {
  //   //   this.items.push(items.val());
  //   //   this.setState({
  //   //     items: this.items
  //   //   });
  //   // }
  // },

  render: function() {

    return(
      <div className="col-md-8">
        <h1 className="text-center">
          <img className="react-logo" src="https://www.codementor.io/assets/tutorial_icon/reactjs.png" />
          Tic Tac Toe
        </h1>
        <div id="game-header">
          <div className="table" id="scoreboard">
            <ScoreBoard />
          </div>
          <div id="Message">
             <Message />
          </div>
        </div>
        <div className="" id="">
          <GameBoard />
        </div>
      </div>
    );
  },

  handleDataLoaded: function() {
    this.setState({loaded: true});
  }
});


var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));



// this.fireBase.items = items.child("items");
// this.fireBase.items.set([
//   {id: "a1", src: "img/blank.png"},
//   {id: "a2", src: "img/blank.png"},
//   {id: "a3", src: "img/blank.png"},
//   {id: "b1", src: "img/blank.png"},
//   {id: "b2", src: "img/blank.png"},
//   {id: "b3", src: "img/blank.png"},
//   {id: "c1", src: "img/blank.png"},
//   {id: "c2", src: "img/blank.png"},
//   {id: "c3", src: "img/blank.png"}
// ]);

// this.props.tiles.push([
//   {id: "a1", src: "img/blank.png"},
//   {id: "a2", src: "img/blank.png"},
//   {id: "a3", src: "img/blank.png"},
//   {id: "b1", src: "img/blank.png"},
//   {id: "b2", src: "img/blank.png"},
//   {id: "b3", src: "img/blank.png"},
//   {id: "c1", src: "img/blank.png"},
//   {id: "c2", src: "img/blank.png"},
//   {id: "c3", src: "img/blank.png"}
// ]);

        // <div className="table" id="game-table">
        //   <GameBoard />
        // </div>
