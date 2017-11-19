// REVEALING MODULE PATTERN
var pixelPainter = (function() {

  var currentColor;
  var $currentColorBox;
  var globalSize;
  var savedCanvas;

  // apply flex box styling to elements
  $('.container').addClass('align-col');

  function createPixelPainter(size) {
    globalSize = size;
    var $pixelPainterCont = $('<div/>')
      .addClass('pixel-painter-cont');
    $('#pixelPainter').append($pixelPainterCont);

    // CANVAS
    var $canvas = $('<div/>')
      .attr({ 'class': 'canvas' });
    $($pixelPainterCont).append($canvas);

    // creating the canvas
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
        .css({ 'background-color' : 'white' })
        .click(changeOnClick)
        .mouseover(changeOnMouseover);
        $('#grid-row' + i).append($col);
      }
    }

    // COLOR PALETTE
    var $colorPalette = $('<div/>')
    .attr({ 'class' : 'color-palette' });
    $($pixelPainterCont).append($colorPalette);

    // set the current color
    currentColor = getRandomColor();

    $currentColorBox = $('<div/>')
    .attr({ 'class' : 'current-color' })
    .css({ 'background-color' : currentColor });
    $($colorPalette).append($currentColorBox);

    var $colors = $('<div/>')
    .attr({ 'class' : 'color-container'});
    $($colorPalette).append($colors);

    // creating the color-palette
    for(var a = 0; a < 3; a++) {
      // create rows
      var $rowColor = $('<div/>').attr({
        id: 'grid-row-color' + a,
        'class': 'div-row-color'
      });
      $($colors).append($rowColor);
      for(var b = 0; b < 17; b++) {
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

  function save() {
    savedCanvas = [];

    for(var i = 0; i < globalSize; i++) {
      savedCanvas[i] = [];
      for(var j = 0; j < globalSize; j++) {
        var color = document.getElementById('grid-cell' + i + j).style.backgroundColor;
        savedCanvas[i][j] = color;
      }
    }
  }

  function load() {
    for(var i = 0; i < globalSize; i++) {
      for(var j = 0; j < globalSize; j++) {
        var color = document.getElementById('grid-cell' + i + j);
        color.style.backgroundColor = savedCanvas[i][j];
      }
    }
  }

  function clear() {
    $('.div-cell').css("background-color","white");
  }

  return {
    createPixelPainter : createPixelPainter,
    clear : clear,
    save : save,
    load : load
  };
})();

pixelPainter.createPixelPainter(20);

var $buttons = $('<div/>')
  .attr({ 'class' : 'buttons' });
$('#pixelPainter').append($buttons);

var $saveBtn = $('<button/>')
  .addClass(' btn-save animate')
  .text('SAVE')
  .click(function() {
    pixelPainter.save();
  });
$($buttons).append($saveBtn);

var $loadBtn = $('<button/>')
  .addClass(' btn-load animate')
  .text('LOAD')
  .click(function() {
    pixelPainter.load();
  });
$($buttons).append($loadBtn);

var $clearBtn = $('<button/>')
  .addClass(' btn-clear animate')
  .text('CLEAR')
  .click(function () {
    pixelPainter.clear();
  });
$($buttons).append($clearBtn);


