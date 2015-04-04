var PointStates = {
    On: "On",
    Off: "Off"
};

var Point = function()
{
    // Properties
    this.state = PointStates.Off;

    // HTML storage
    this.node = document.createElement('div');
    this.node.setAttribute('class', 'point');
    this.node.classList.add('off');
};

Point.prototype.turnOn = function()
{
    this.state = PointStates.On;

    this.node.classList.remove('off');
    this.node.classList.add('on');
};

Point.prototype.turnOff = function()
{
    this.state = PointStates.Off;

    this.node.classList.remove('on');
    this.node.classList.add('off');
};

Point.prototype.drawInto = function(target)
{
    target.appendChild(this.node);
};
