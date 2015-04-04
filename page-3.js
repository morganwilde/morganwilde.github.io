window.onload = function()
{
    var page = new Template();
    page.generatePageStructure();

    // A point
    var pointExample = new Point();
    pointExample.drawInto(document.querySelector('#placeholder-point-example'));
    var buttonTurnOn = document.querySelector('#button-turnOn');
    var buttonTurnOff = document.querySelector('#button-turnOff');
    buttonTurnOn.addEventListener('click', function() {
        pointExample.turnOn();
    });
    buttonTurnOff.addEventListener('click', function() {
        pointExample.turnOff();
    });

    // A grid
    var gridExample = new Grid(21, 21);
    gridExample.drawInto(document.querySelector('#placeholder-grid-example'));
    var buttonGridTurnOn = document.querySelector('#button-grid-turnOn');
    var buttonGridTurnOff = document.querySelector('#button-grid-turnOff');
    var textX = document.querySelector('#text-grid-x');
    var textY = document.querySelector('#text-grid-y');

    buttonGridTurnOn.addEventListener('click', function() {
        var x = Number(textX.value);
        var y = Number(textY.value);
        if (x >= 0 && x < gridExample.width) {
            textX.nextSibling.textContent = '';
            if (y >= 0 && y < gridExample.height) {
                textY.nextSibling.textContent = '';
                gridExample.point(x, y).turnOn();
            } else {
                textY.nextSibling.textContent = 'y is out of bounds (0, '+(gridExample.height-1)+')';
            }
        } else {
            textX.nextSibling.textContent = 'x is out of bounds (0, '+(gridExample.width-1)+')';
        }
    });
    buttonGridTurnOff.addEventListener('click', function() {
        var x = Number(textX.value);
        var y = Number(textY.value);
        if (x >= 0 && x < gridExample.width) {
            textX.nextSibling.textContent = '';
            if (y >= 0 && y < gridExample.height) {
                textY.nextSibling.textContent = '';
                gridExample.point(x, y).turnOff();
            } else {
                textY.nextSibling.textContent = 'y is out of bounds (0, '+(gridExample.height-1)+')';
            }
        } else {
            textX.nextSibling.textContent = 'x is out of bounds (0, '+(gridExample.width-1)+')';
        }
    });
};
