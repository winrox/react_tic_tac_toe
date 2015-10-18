var React = require('react');
var Tile = require('./tile');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
         {this.renderGrid()}
      </div>
    )
  },

  getTileById: function(id) {
    /* iterate through each tile in tiles */
    for(var index in this.props.tiles) {
      var tile = this.props.tiles[index];

      if(tile.id == id) {
        /* if this is the tile we are looking for then return it */
        return tile;
      }
    }
  },

  renderGrid: function() {

    return (
      <div>
        <table>
          <tr>
            <td>
              <Tile
              tile={this.getTileById(this.props.tiles[0].id)}
              clickCounter={this.props.clickCounter}
              alertMessage={this.props.alertMessage} />
            </td>
            <td>
            <Tile
              tile={this.getTileById(this.props.tiles[1].id)}
              clickCounter={this.props.clickCounter}
              alertMessage={this.props.alertMessage} />
            </td>
            <td>
            <Tile
              tile={this.getTileById(this.props.tiles[2].id)}
              clickCounter={this.props.clickCounter}
              alertMessage={this.props.alertMessage} />
            </td>
          </tr>
          <tr>
            <td>
            <Tile
              tile={this.getTileById(this.props.tiles[3].id)}
              clickCounter={this.props.clickCounter}
              alertMessage={this.props.alertMessage} />
            </td>
            <td>
            <Tile
              tile={this.getTileById(this.props.tiles[4].id)}
              clickCounter={this.props.clickCounter}
              alertMessage={this.props.alertMessage} />
            </td>
            <td>
            <Tile
              tile={this.getTileById(this.props.tiles[5].id)}
              clickCounter={this.props.clickCounter}
              alertMessage={this.props.alertMessage} />
            </td>
          </tr>
          <tr>
            <td>
            <Tile
              tile={this.getTileById(this.props.tiles[6].id)}
              clickCounter={this.props.clickCounter}
              alertMessage={this.props.alertMessage} />
            </td>
            <td>
            <Tile
              tile={this.getTileById(this.props.tiles[7].id)}
              clickCounter={this.props.clickCounter}
              alertMessage={this.props.alertMessage} />
            </td>
            <td>
            <Tile
              tile={this.getTileById(this.props.tiles[8].id)}
              clickCounter={this.props.clickCounter}
              alertMessage={this.props.alertMessage} />
            </td>
          </tr>
        </table>
      </div>
    );
  }



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




    // if($('#'+(indexOfWin[0])).attr("src") == "img/X.png" &&
    //    $('#'+(indexOfWin[1])).attr("src") == "img/X.png" &&
    //    $('#'+(indexOfWin[2])).attr("src") == "img/X.png"){
    //
    //     winnerFound = true;
    //     $('#win-message h1').html("X wins!!!").show();
    //     scoreX++;
    //     $('#x-score').html(scoreX);
    //     $('#play-again').html('<button id="replay" onclick="buttonPress();">Play Again</button>').show();
    //   }
    //
    //   else if($('#'+(indexOfWin[0])).attr("src") == "img/O.png" &&
    //           $('#'+(indexOfWin[1])).attr("src") == "img/O.png" &&
    //           $('#'+(indexOfWin[2])).attr("src") == "img/O.png"){
    //     winnerFound = true;
    //     $('#win-message h1').html("O wins!!!").show();
    //     scoreO++;
    //     $('#o-score').html(scoreO);
    //     $('#play-again').html('<button id="replay" onclick="buttonPress();">Play Again</button>').show();
    //   }
    //
    //   else if(clickCounter == 9 && winnerFound == false && i == 7){
    //     $('#win-message h1').html("<p>No winner this time!<br>Please play again.</p>").show();
    //     $('#play-again').html('<button id="replay" onclick="buttonPress();">Play Again</button>').show();
    //   }
    // }
  // }

});








// isEven: function(num) {
//   if (num === 0){
//     return true;
//   } else if(num === 1) {
//     return false;
//   } else if(num < 0) {
//     return isEven(num + 2);
//   }
//   else {
//     return isEven(num - 2);
//   }
// },
