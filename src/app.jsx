var React = require('react');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var Message = require('./message');
var ScoreBoard = require('./scoreboard');
var GameBoard = require('./game_board');
var PlayAgain = require('./play_again');

// var rootUrl = 'https://react-tic-tac-toe.firebaseio.com//';

var App = React.createClass({
  mixins: [ ReactFire ], // this allows you to use any methods from ReacFire (bindAsObject here)

  getInitialState: function() {
    return {
      winnerFound: false,
      loaded: false,
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
      clickCounter: 0
    }
  },

  // componentWillMount: function(){
  //   this.fireBase = new FireBase(rootUrl + 'items/'); //new instance of firebase
  //   this.bindAsArray(this.fireBase, 'items'); //get/set info in db items
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
            <ScoreBoard  scoreX={this.state.scoreX} scoreY={this.state.scoreY} />
          </div>
          <div>
            <PlayAgain />
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
      return isEven(num + 2);
    }
    else {
      return isEven(num - 2);
    }
  },

  tileClickHandler: function(tileId, child) {
    console.log('tile '+ tileId+ ' has been clicked');
    this.setState((state, props) => ({clickCounter: state.clickCounter + 1}));

    // if(this.state.foundWinner == true) {
    //   return;
    // } else {
    //   this.setState((state, props) => ({clickCounter: state.clickCounter + 1}));
    //
    //   var even = this.isEven(this.state.clickCounter);
    //
    //
    // }

    // this.setState((state, props) => ({clickCounter: state.clickCounter + 1}));
    // this.findWinner();
  },



  // findWinner: function (){
  //   var win = [['a1','a2','a3'],['b1','b2','b3'],['c1','c2','c3'],['a1','b1','c1'],['a2','b2','c2'],['a3','b3','c3'],['a1','b2','c3'],['a3','b2','c1']];
  //
  //   for(var i in win) {
  //     var winIndex = win[i];
  //
  //     if (
  //       (this.props.tiles[i].id == winIndex[0] && this.props.tiles[i].src == "img/X.png")
  //       && (this.props.tiles[i].id == winIndex[1] && this.props.tiles[i].src == "img/X.png")
  //       && (this.props.tiles[i].id == winIndex[2] && this.props.tiles[i].src == "img/X.png")
  //     ) {
  //       this.setState({foundWinner: true});
  //     }
  //
  //     else if (
  //       (this.props.tiles[i].id == winIndex[0] && this.props.tiles[i].src == "img/Y.png")
  //       && (this.props.tiles[i].id == winIndex[1] && this.props.tiles[i].src == "img/Y.png")
  //       && (this.props.tiles[i].id == winIndex[2] && this.props.tiles[i].src == "img/Y.png")
  //     ) {
  //       this.setState({foundWinner: true});
  //     }
  //
  //
  //
  //
  //   if($('#'+(indexOfWin[0])).attr("src") == "img/X.png" &&
  //      $('#'+(indexOfWin[1])).attr("src") == "img/X.png" &&
  //      $('#'+(indexOfWin[2])).attr("src") == "img/X.png"){
  //
  //       winnerFound = true;
  //       $('#win-message h1').html("X wins!!!").show();
  //       scoreX++;
  //       $('#x-score').html(scoreX);
  //       $('#play-again').html('<button id="replay" onclick="buttonPress();">Play Again</button>').show();
  //     }
  //
  //     else if($('#'+(indexOfWin[0])).attr("src") == "img/O.png" &&
  //             $('#'+(indexOfWin[1])).attr("src") == "img/O.png" &&
  //             $('#'+(indexOfWin[2])).attr("src") == "img/O.png"){
  //       winnerFound = true;
  //       $('#win-message h1').html("O wins!!!").show();
  //       scoreO++;
  //       $('#o-score').html(scoreO);
  //       $('#play-again').html('<button id="replay" onclick="buttonPress();">Play Again</button>').show();
  //     }
  //
  //     else if(clickCounter == 9 && winnerFound == false && i == 7){
  //       $('#win-message h1').html("<p>No winner this time!<br>Please play again.</p>").show();
  //       $('#play-again').html('<button id="replay" onclick="buttonPress();">Play Again</button>').show();
  //     }
  //   }
  // }

  // handleDataLoaded: function() {
  //   this.setState({loaded: true});
  // }
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
