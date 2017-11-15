// REVEALING MODULE PATTERN
var pixelPainter = (function() {

  // CANVAS
  var $canvas = $('<div/>').attr({ 'class': 'canvas' });
  $('#pixelPainter').append($canvas);

  // creates all cells in canvas
  function createCanvas(size) {
    // create rows
    for(var i = 0; i < size; i++) {
      var $row = $('<div/>').attr({
        id: 'gridRow' + i,
        'class': 'divRow'
      });
      $($canvas).append($row);
      // create columns
      for(var j = 0; j < size; j++) {
        var $col = $('<div/>').attr({
          id: 'gridCell' + i + j,
          'class': 'divCell'
        }).click(changeOnClick).mouseover(changeOnMouseover);
        $('#gridRow' + i).append($col);
      }
    }
  }

  function changeOnClick() {
    event.currentTarget.style.backgroundColor = 'blue';
  }

  function changeOnMouseover() {
    if(event.buttons === 1) {
      event.currentTarget.style.backgroundColor = 'yellow';
    }
  }

  function clear() {
    $('.divCell').css("background-color","white");
  }

  // COLOR PALETTE
  var $colorPalette = $('<div/>').attr({ 'class': 'color-palette' });
  $('#pixelPainter').append($colorPalette);

  function createColorPalette() {
    // creates rows
    for(var i = 0; i < 3; i++) {
      var $row = $('<div/>').attr({
        id: 'gridRowColor' + i,
        'class': 'divRowColor'
      });
      $($$colorPalette).append($row);
      // creates columns
      for(var j = 0; j < 20; j++) {
        var $col = $('<div/>').attr({
          id: 'gridCellColor' + i + j,
          'class': 'divCellColor'
        }).click();
        $('#gridRowColor' + i).append($col);
      }
    }
  }

  return {
    createCanvas: createCanvas
  };
})();

pixelPainter.createCanvas(5);
