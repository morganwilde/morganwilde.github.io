function linearFunction(x1, y1, x2, y2) {
    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    var slope = deltaY / deltaX;
    var yIntercept = y1 - slope * x1;

    return function(x) {
        return slope * x + yIntercept;
    };
};

window.onload = function()
{
    var page = new Template();
    page.generatePageStructure();

    // Functions values
    // Generate the table
    var tableBodyNode = document.querySelector('#values tbody');
    
    for (var i = 0; i < 10; i++) {
        var row = document.createElement('tr');
        var cellX = document.createElement('td');
        var cellY = document.createElement('td');
        cellX.textContent = '0';
        cellY.textContent = '0';

        row.appendChild(cellX);
        row.appendChild(cellY);
        tableBodyNode.appendChild(row);
    }

    var button = document.querySelector('#interpolate');
    var textAX = document.querySelector('#ax');
    var textAY = document.querySelector('#ay');
    var textBX = document.querySelector('#bx');
    var textBY = document.querySelector('#by');

    // Generate the values
    button.addEventListener('click', function() {
        var x1 = Number(textAX.value);
        var y1 = Number(textAY.value);
        var x2 = Number(textBX.value);
        var y2 = Number(textBY.value);

        var func = linearFunction(x1, y1, x2, y2);

        var rows = document.querySelector('#values tbody').children;
        for (var x = 0; x < 10; x++) {
            var y = func(x);
            var row = rows[x];
            var cells = row.querySelectorAll('td');
            cells[0].textContent = x;
            cells[1].textContent = y;
        }
    });

    // Test how many values of y are useful
    var pointA = {x: 0, y: 0}
    var countTotal = 0;
    var countNotNumbers = 0;
    var countNotIntegers = 0;
    var countNotContinuous = 0;
    for (var y = 0; y < 10; y++) {
        for (var x = 0; x < 10; x++) {
            var pointB = {x: x, y: y}
            var func = linearFunction(pointA.x, pointA.y, pointB.x, pointB.y);

            var testNotANumber = false;
            var testNotAnInteger = false;
            var testNotContinuous = false;
            for (var i = 0; i < 10; i++) {
                var value = func(i);
                if (isNaN(value)) {
                    testNotANumber = true;
                }
                if ((value - Math.floor(value)) > 0) {
                    testNotAnInteger = true;
                }
                if (i > 0 && (func(i) - func(i - 1)) > 1) {
                    testNotContinuous = true;
                }
            }
            if (testNotANumber) {
                countNotNumbers++;
                testNotAnInteger = false;
                testNotContinuous = false;
            }
            if (testNotAnInteger) {
                countNotIntegers++;
                testNotContinuous = false;
            }
            if (testNotContinuous) {
                countNotContinuous++;
            }
            countTotal++;
        }
    }

    var countGood = countTotal - countNotNumbers - countNotIntegers - countNotContinuous;

    var statisticsNodes = document.querySelector('#statistics tbody').children;
    statisticsNodes[0].children[1].textContent = countNotNumbers;
    statisticsNodes[1].children[1].textContent = countNotIntegers;
    statisticsNodes[2].children[1].textContent = countNotContinuous;
    statisticsNodes[3].children[1].textContent = countGood;
};
