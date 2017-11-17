// REVEALING MODULE PATTERN
var pixelPainter = (function() {

  var currentColor;

  // CANVAS
  var $canvas = $('<div/>')
  .attr({ 'class': 'canvas' });
  $('#pixelPainter').append($canvas);

  // creates all cells in canvas
  function createCanvas(size) {
    // create rows
    for(var i = 0; i < size; i++) {
      var $row = $('<div/>').attr({
        id: 'grid-row' + i,
        'class': 'div-row'
      });
      $($canvas).append($row);
      // create columns
      for(var j = 0; j < size; j++) {
        var $col = $('<div/>').attr({
          id: 'grid-cell' + i + j,
          'class': 'div-cell'
        })
        .click(changeOnClick)
        .mouseover(changeOnMouseover);
        $('#grid-row' + i).append($col);
      }
    }
  }

  function changeOnClick() {
    event.currentTarget.style.backgroundColor = currentColor;
  }

  function changeOnMouseover() {
    if(event.buttons === 1) {
      event.currentTarget.style.backgroundColor = currentColor;
    }
  }

  function clear() {
    $('.divCell').css("background-color","white");
  }

  // COLOR PALETTE
  var $colorPalette = $('<div/>')
  .attr({ 'class' : 'color-palette' });
  $('#pixelPainter').append($colorPalette);

  var $currentColorBox = $('<div/>')
  .attr({ 'class' : 'current-color' })
  .css({ 'background-color' : getRandomColor() });
  $($colorPalette).append($currentColorBox);

  var $colors = $('<div/>').attr({
    'class' : 'color-container'
  });
  $($colorPalette).append($colors);

  function createColorPalette() {
    // creates rows
    for(var i = 0; i < 3; i++) {
      var $row = $('<div/>').attr({
        id: 'grid-row-color' + i,
        'class': 'div-row-color'
      });
      $($colors).append($row);
      // creates columns
      for(var j = 0; j < 20; j++) {
        var $col = $('<div/>').attr({
          id: 'grid-cell-color' + i + j,
          'class': 'div-cell-color'
        })
        .css("background-color", getRandomColor())
        .click(changeCurrentColor);
        $('#grid-row-color' + i).append($col);
      }
    }
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeCurrentColor() {
    currentColor = event.currentTarget.style.backgroundColor;
    $($currentColorBox)
    .css({ "background-color" : currentColor });
  }

  return {
    createCanvas: createCanvas,
    createColorPalette: createColorPalette
  };
})();

pixelPainter.createCanvas(5);
pixelPainter.createColorPalette();
