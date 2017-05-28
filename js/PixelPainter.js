var ppDiv = document.createElement("div");
ppDiv.setAttribute("id", "pp-canvas");
document.getElementById("pixelPainter").appendChild(ppDiv);

var ppTable = document.createElement("table");
ppTable.setAttribute("id", "pp-table");
document.getElementById("pp-canvas").appendChild(ppTable);

var height = 5;
var width = 5;

var counter = 0;

var rowCol = [];
for(var i = 0; i < height; i++) {
  rowCol[i] = [];
  for(var j = 0; j < width; j++) {
    rowCol[i][j] = '<td>' + 'a' + '</td>';
  }
  rowCol[i] = '<tr>' + rowCol[i] + '</tr>';
}

var test = document.getElementById('pp-table').innerHTML = rowCol;

rowCol[1][1] = '<td>' + 'bfjadk' + '</td>';
