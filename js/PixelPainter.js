//global variable
var curColor;

//functions
function canvas() {
  var grid = document.createElement("div");
  grid.setAttribute("id", "pp-grid");
  document.getElementById("pixelPainter").appendChild(grid);

  var table = [];

  //creates the grid for users to draw on
  function createCanvas(height, width) {
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

  //change background to the current color
  function changeBackgroundColor() {
    event.currentTarget.style.backgroundColor = curColor;
  }

  //sets all cell's background color to white
  function clear() {
    for(var i = 0; i < table.length; i++) {
      for(var j = 0; j < table[i].length; j++) {
        table[i][j].style.backgroundColor = 'white';
      }
    }
  }

  return {
    createCanvas: createCanvas,
    clear: clear,
    changeBackgroundColor: changeBackgroundColor
  };
}

function colorPalette() {
  var palette = document.createElement("div");
  palette.setAttribute("id", "pp-colorTable");
  document.getElementById("pixelPainter").appendChild(palette);

  //creates a color palette
  var table = [];
  var height = 5; //need to fix later
  var width = 5;  //need to fix later
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

  //sets the current color to whatever the user clicked
  function changeColor() {
    curColor = event.currentTarget.style.backgroundColor;
  }
}

var canvas = canvas();
canvas.createCanvas(30, 30);
var colorPalette = colorPalette();

//clear button
var clearBtn = document.createElement("button");
clearBtn.innerHTML = "clear";
clearBtn.type = "button";
document.getElementById("pixelPainter").appendChild(clearBtn);

clearBtn.addEventListener('click', function(event) {
  canvas.clear();
});

//erase button
var eraseBtn = document.createElement("button");
eraseBtn.innerHTML = "erase";
eraseBtn.type = "button";
document.getElementById("pixelPainter").appendChild(eraseBtn);

eraseBtn.addEventListener('click', function(event) {
  curColor = 'white';
});