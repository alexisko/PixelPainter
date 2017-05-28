//
function canvas() {
  var ppDiv = document.createElement("div");
  ppDiv.setAttribute("id", "pp-canvas");
  document.getElementById("pixelPainter").appendChild(ppDiv);

  var ppTable = document.createElement("table");
  ppTable.setAttribute("id", "pp-table");
  document.getElementById("pp-canvas").appendChild(ppTable);

  function createCanvas(height, width) {
    var table = [];
    for(var i = 0; i < height; i++) { //rows
      table[i] = document.createElement("tr");
      document.getElementById('pp-table').appendChild(table[i]);
      table[i].id = 'Row' + i;
      table[i] = [];

      for(var j = 0; j < width; j++) { //cols
        table[i][j] = document.createElement("td");
        table[i][j].addEventListener('click', changeColor);
        document.getElementById('Row' + i).appendChild(table[i][j]);
      }
    }
    return table;
  }

  // ppTable.addEventListener('click', function (event) {
  //   event.currentTarget.style.backgroundColor = "yellow";
  // });

  function changeColor() {
    event.currentTarget.style.backgroundColor = "yellow";
  }

  return {
    createCanvas: createCanvas,
    changeColor: changeColor
  };
}

function colorPalette() {
  var ppDiv = document.createElement("div");
  ppDiv.setAttribute("id", "pp-colorPalette");
  document.getElementById("pixelPainter").appendChild(ppDiv);

  var ppTable = document.createElement("table");
  ppTable.setAttribute("id", "pp-colorTable");
  document.getElementById("pp-colorPalette").appendChild(ppTable);
}

var canvas = canvas();
var table = canvas.createCanvas(5, 5);