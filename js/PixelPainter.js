function pixelPainter() {
  //global variables
  var curColor;
  var colorBox;

  var table = [];
  var savedArray = [];
  var colorTable = [];

  //CANVAS FUNCTIONS

  var canvasDiv = document.createElement("div");
  canvasDiv.setAttribute("id", "canvasDiv");
  document.getElementById("pixelPainter").appendChild(canvasDiv);

  var gridDiv = document.createElement("div");
  gridDiv.setAttribute("id", "gridDiv");
  document.getElementById("canvasDiv").appendChild(gridDiv);

  var grid = document.createElement("div");
  grid.setAttribute("id", "pp-grid");
  document.getElementById("gridDiv").appendChild(grid);

  //
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
        table[i][j].addEventListener('mouseover', changeBackgroundColor2);
        table[i][j].addEventListener('click', changeBackgroundColor);
        document.getElementById('gridRow' + i).appendChild(table[i][j]);
      }
    }
  }

  //change background to the current color
  function changeBackgroundColor() {
    event.currentTarget.style.backgroundColor = curColor;
  }

  //
  function changeBackgroundColor2() {
    if(event.buttons === 1) {
      event.currentTarget.style.backgroundColor = curColor;
    }
  }

  //sets all cell's background color to white
  function clear() {
    for(var i = 0; i < table.length; i++) {
      for(var j = 0; j < table[i].length; j++) {
        table[i][j].style.backgroundColor = 'white';
      }
    }
  }

  //
  function save(height, width) {
    for(var i = 0; i < height; i++) {
      savedArray[i] = document.createElement("div");
      savedArray[i] = [];
      for(var j = 0; j < width; j++) {
        savedArray[i][j] = document.createElement("div");
        savedArray[i][j].style.backgroundColor = table[i][j].style.backgroundColor;
      }
    }
  }

  //
  function loadSave(height, width) {
    for(var i = 0; i < height; i++) {
      for(var j = 0; j < width; j++) {
        table[i][j].style.backgroundColor = savedArray[i][j].style.backgroundColor;
      }
    }
  }


  //COLOR PALETTE FUNCTIONS

  colorDiv = document.createElement("div");
  colorDiv.setAttribute("id", "colorDiv");
  document.getElementById("pixelPainter").appendChild(colorDiv);

  colorBox = document.createElement("div");
  colorBox.setAttribute("id", "colorBox");
  document.getElementById("colorDiv").appendChild(colorBox);

  var palette = document.createElement("div");
  palette.setAttribute("id", "pp-colorTable");
  document.getElementById("colorDiv").appendChild(palette);

  //creates a color palette
  function createColorPalette() {
    for(var i = 0; i < 3; i++) { //rows
      table[i] = document.createElement("div");
      document.getElementById('pp-colorTable').appendChild(table[i]);
      table[i].className = 'divRowColor';
      table[i].id = 'colorRow' + i;
      table[i] = [];

      for(var j = 0; j < 20; j++) { //cols
        table[i][j] = document.createElement("div");
        table[i][j].addEventListener('click', changeColor);
        table[i][j].style.backgroundColor = getRandomColor();
        table[i][j].className = 'divCellColor';
        document.getElementById('colorRow' + i).appendChild(table[i][j]);
      }
    }
  }

  //
  function reRandomizeColors() {
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 20; j++) {
        table[i][j].style.backgroundColor = getRandomColor();
      }
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
    colorBox.style.backgroundColor = curColor;
  }

  return {
    createCanvas: createCanvas,
    clear: clear,
    save: save,
    loadSave: loadSave,
    createColorPalette: createColorPalette,
    reRandomizeColors: reRandomizeColors
  };
}

// function buttons() {
//   var buttonDiv = document.createElement("div");
//   buttonDiv.setAttribute("id", "buttonDiv");
//   document.getElementById("pixelPainter").appendChild(buttonDiv);

//   //clear button
//   var clearBtn = document.createElement("button");
//   clearBtn.innerHTML = "clear";
//   clearBtn.type = "button";
//   document.getElementById("buttonDiv").appendChild(clearBtn);

//   clearBtn.addEventListener('click', function(event) {
//     canvas.clear();
//   });

//   //erase button
//   var eraseBtn = document.createElement("button");
//   eraseBtn.innerHTML = "erase";
//   eraseBtn.type = "button";
//   document.getElementById("buttonDiv").appendChild(eraseBtn);

//   eraseBtn.addEventListener('click', function(event) {
//     curColor = 'white';
//     colorBox.style.backgroundColor = curColor;
//   });

//   //save button
//   var saveBtn = document.createElement("button");
//   saveBtn.innerHTML = "save";
//   saveBtn.type = "button";
//   document.getElementById("buttonDiv").appendChild(saveBtn);

//   saveBtn.addEventListener('click', function(event) {
//     canvas.save(20, 20);
//   });

//   //load button
//   var loadBtn = document.createElement("button");
//   loadBtn.innerHTML = "load";
//   loadBtn.type = "button";
//   document.getElementById("buttonDiv").appendChild(loadBtn);

//   loadBtn.addEventListener('click', function(event) {
//     canvas.loadSave(20, 20);
//   });
// }

var pixelPainter = pixelPainter();
pixelPainter.createCanvas(20, 20);
pixelPainter.createColorPalette();
// var buttons = buttons();

