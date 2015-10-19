/*TODO: stop tile from changing source once changed from blank only */
/*TODO: sometimes not all tiles can be changed to x or o */
/*TODO: render messages */

var React = require('react');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var Message = require('./message');
var ScoreBoard = require('./scoreboard');
var GameBoard = require('./game_board');
var PlayAgain = require('./play_again');
var _ = require('underscore');

// var rootUrl = 'https://react-tic-tac-toe.firebaseio.com//';

var App = React.createClass({
  mixins: [ ReactFire ], // this allows you to use any methods from ReacFire (bindAsObject here)

  getInitialState: function() {
    return {
      winnerFound: false,
      /* TODO: instead of src: --> value: 'x' || 'o' || ''  */
      tiles: [
        {id: "a1", src: "img/blank.png"},
        {id: "a2", src: "img/blank.png"},
        {id: "a3", src: "img/blank.png"},
        {id: "b1", src: "img/blank.png"},
        {id: "b2", src: "img/blank.png"},
        {id: "b3", src: "img/blank.png"},
        {id: "c1", src: "img/blank.png"},
        {id: "c2", src: "img/blank.png"},
        {id: "c3", src: "img/blank.png"}
      ],
      scoreX: 0,
      scoreY: 0,
      alertMessage: '',
      clickCounter: 0,
    }
  },

  render: function() {

    return(
      <div className="col-md-8">
        <h1 className="text-center">
          <img className="react-logo" src="https://www.codementor.io/assets/tutorial_icon/reactjs.png" />
          Tic Tac Toe
        </h1>
        <div id="game-header">
          <div className="table" id="scoreboard">
            <ScoreBoard  scoreX={this.state.scoreX} scoreY={this.state.scoreY} />
          </div>
          <div>
            <PlayAgain  playAgainClickHandler={this.playAgainClickHandler}/>
          </div>
          <div id="Message">
             <Message  alertMessage={this.state.alertMessage} winnerFound={this.state.winnerFound} />
          </div>
        </div>
        <div className="" id="">
          <GameBoard
            tiles={this.state.tiles}
            winnerFound={this.state.winnerFound}
            clickCounter={this.state.clickCounter}
            alertMessage={this.state.alertMessage}
            clickHandler={this.tileClickHandler}
          />
        </div>
      </div>
    );
  },

  isEven: function(num) {
    if (num === 0){
      return true;
    } else if(num === 1) {
      return false;
    } else if(num < 0) {
      return this.isEven(num + 2);
    }
    else {
      return this.isEven(num - 2);
    }
  },

  tileClickHandler: function(tile, child) {

    console.log('tile '+ tile.id + ' has been clicked and tile.src= ' + tile.src);

    if(this.state.foundWinner == true) {
      return;
    } else {
      this.setState((state, props) => ({clickCounter: state.clickCounter + 1}));

      var even = this.isEven(this.state.clickCounter);

      if(tile.src !== 'img/blank.png') {
        console.log(tile.id + " is considered to already have an X or O in it.")
        this.setState({alertMessage: "I'm sorry. That spot has already been taken."});
        this.setState((state, props) => ({clickCounter: state.clickCounter - 1}));
      }

       else if(even == true) {
        tile.src = "img/X.png"
        console.log(tile.id + " has gotten an X.");
      }

      else if(even == false) {
        tile.src = "img/O.png"
        console.log(tile.id + " has gotten an O.");
      }



      else {
        console.log("ERROR!");
        this.setState((state, props) => ({clickCounter: state.clickCounter - 1}));
      }
      console.log(this.isEven(this.state.clickCounter) + " is the value of isEven()");
    }

    this.findWinner();
  },

  getTileById: function(id) {
    /* iterate through each tile in tiles */
    for(var index in this.state.tiles) {
      var tile = this.state.tiles[index];

      if(tile.id == id) {
        /* if this is the tile we are looking for then return it */
        return tile;
      }
    }
  },

  findWinner: function (){
    var tiles = this.state.tiles;

    var win = [['a1','a2','a3'],['b1','b2','b3'],['c1','c2','c3'],['a1','b1','c1'],['a2','b2','c2'],['a3','b3','c3'],['a1','b2','c3'],['a3','b2','c1']];

    for(var i in win) {
      var winIndex = win[i];

      if (
        (this.getTileById(winIndex[0]).src == "img/X.png")
        && (this.getTileById(winIndex[1]).src == "img/X.png")
        && (this.getTileById(winIndex[2]).src == "img/X.png")
      ) {
        this.setState({foundWinner: true});
        this.setState((state, props) => ({scoreX: state.scoreX + 1}));
        this.setState({alertMessage: "X wins!"});
        //need to show play-again button
      }

      if (
        (this.getTileById(winIndex[0]).src == "img/O.png")
        && (this.getTileById(winIndex[1]).src == "img/O.png")
        && (this.getTileById(winIndex[2]).src == "img/O.png")
      ) {
        this.setState({foundWinner: true});
        this.setState((state, props) => ({scoreO: state.scoreO + 1}));
        this.setState({alertMessage: "O wins!"});
        //need to show play-again button
      }

      else if(this.state.clickCounter == 9 && foundWinner == false && i == 7) {
        this.setState({alertMessage: "No winner this time. Please play again"});
        //need to show play-again button
      }
    }
  },

  playAgainClickHandler: function() {
    console.log('play again button click heard');
    this.clearGame();
    this.setState({alertMessage: ""});
    this.setState({foundWinner: false});
    this.setState({clickCounter: 0});
    //hide play again button
  },

  clearGame: function() {
    var newTiles = _.extend({}, this.state.tiles);
    /* iterate through each tile in tiles */
    for(var index in newTiles) {
      var tile = newTiles[index];
      tile.src = "img/blank.png"
    }
    this.setState({tiles: newTiles});
  }

});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
