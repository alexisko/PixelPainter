var ppDiv = document.createElement("div");
ppDiv.setAttribute("id", "pp-canvas");
document.getElementById("pixelPainter").appendChild(ppDiv);

var ppTable = document.createElement("table");
ppTable.setAttribute("id", "pp-table");
document.getElementById("pp-canvas").appendChild(ppTable);

var height = 5;
var width = 5;

var td = document.createElement("td");
var tr = document.createElement("tr");

var rowCol = [];
for(var i = 0; i < height; i++) {
  rowCol[i] = document.createElement("tr");
  rowCol[i].id = 'Row' + i;
  document.getElementById('pp-table').appendChild(rowCol[i]);
  rowCol[i] = [];
  for(var j = 0; j < width; j++) {
    rowCol[i][j] = document.createElement("td");
    document.getElementById('Row' + i).appendChild(rowCol[i][j]);
  }
}

console.log("check rowcol", rowCol[1][0]);
