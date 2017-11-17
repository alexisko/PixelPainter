// REVEALING MODULE PATTERN
var pixelPainter = (function() {

  var currentColor;

  function createPixelPainter(size) {
    // CANVAS
    var $canvas = $('<div/>')
    .attr({ 'class': 'canvas' });
    $('#pixelPainter').append($canvas);

    // creating canvas
    for(var i = 0; i < size; i++) {
      // create rows
      var $row = $('<div/>').attr({
        id: 'grid-row' + i,
        'class': 'div-row'
      });
      $($canvas).append($row);
      for(var j = 0; j < size; j++) {
        // create columns
        var $col = $('<div/>').attr({
          id: 'grid-cell' + i + j,
          'class': 'div-cell'
        })
        .click(changeOnClick)
        .mouseover(changeOnMouseover);
        $('#grid-row' + i).append($col);
      }
    }

    // COLOR PALETTE
    var $colorPalette = $('<div/>')
    .attr({ 'class' : 'color-palette' });
    $('#pixelPainter').append($colorPalette);

    var $currentColorBox = $('<div/>')
    .attr({ 'class' : 'current-color' })
    .css({ 'background-color' : getRandomColor() });
    $($colorPalette).append($currentColorBox);

    var $colors = $('<div/>')
    .attr({ 'class' : 'color-container'});
    $($colorPalette).append($colors);

    // creating color-palette
    for(var a = 0; a < 3; a++) {
      // create rows
      var $rowColor = $('<div/>').attr({
        id: 'grid-row-color' + a,
        'class': 'div-row-color'
      });
      $($colors).append($rowColor);
      for(var b = 0; b < 20; b++) {
        // create columns
        var $colColor = $('<div/>').attr({
          id: 'grid-cell-color' + a + b,
          'class': 'div-cell-color'
        })
        .css("background-color", getRandomColor())
        .click(changeCurrentColor);
        $('#grid-row-color' + a).append($colColor);
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

  function changeOnClick() {
    event.currentTarget.style.backgroundColor = currentColor;
  }

  function changeOnMouseover() {
    if(event.buttons === 1) {
      event.currentTarget.style.backgroundColor = currentColor;
    }
  }

  function changeCurrentColor() {
    currentColor = event.currentTarget.style.backgroundColor;
    $($currentColorBox)
    .css({ "background-color" : currentColor });
  }

  function clear() {
    $('.divCell').css("background-color","white");
  }

  return {
    createPixelPainter : createPixelPainter
  };
})();

pixelPainter.createPixelPainter(5);
