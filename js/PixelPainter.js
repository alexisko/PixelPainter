//global variable
var curColor;

//functions
function canvas() {
  var ppTable = document.createElement("div");
  ppTable.setAttribute("id", "pp-grid");
  document.getElementById("pixelPainter").appendChild(ppTable);

  function createCanvas(height, width) {
    var table = [];
    for(var i = 0; i < height; i++) { //rows
      table[i] = document.createElement("div");
      document.getElementById('pp-grid').appendChild(table[i]);
      table[i].className = 'divRowGrid';
      table[i].id = 'gridRow' + i;
      table[i] = [];

      for(var j = 0; j < width; j++) { //cols
        table[i][j] = document.createElement("div");
        table[i][j].style.backgroundColor = 'white';
        table[i][j].className = 'divCellGrid';
        table[i][j].addEventListener('click', changeBackgroundColor);
        document.getElementById('gridRow' + i).appendChild(table[i][j]);
      }
    }
  }

  function changeBackgroundColor() {
    event.currentTarget.style.backgroundColor = curColor;
  }

  return {
    createCanvas: createCanvas,
    changeBackgroundColor: changeBackgroundColor
  };
}

function colorPalette() {
  var ppTable = document.createElement("div");
  ppTable.setAttribute("id", "pp-colorTable");
  document.getElementById("pixelPainter").appendChild(ppTable);

  var table = [];
  var height = 5;
  var width = 5;
  for(var i = 0; i < height; i++) { //rows
    table[i] = document.createElement("div");
    document.getElementById('pp-colorTable').appendChild(table[i]);
    table[i].className = 'divRowColor';
    table[i].id = 'colorRow' + i;
    table[i] = [];

    for(var j = 0; j < width; j++) { //cols
      table[i][j] = document.createElement("div");
      table[i][j].addEventListener('click', changeColor);
      table[i][j].style.backgroundColor = getRandomColor();
      table[i][j].className = 'divCellColor';
      document.getElementById('colorRow' + i).appendChild(table[i][j]);
    }
  }

  /*
   * Random Color Generator function via:
   * https://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
   */
  function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
  }

  function changeColor() {
    curColor = event.currentTarget.style.backgroundColor;
  }
}

var canvas = canvas();
canvas.createCanvas(5, 5);
var colorPalette = colorPalette();