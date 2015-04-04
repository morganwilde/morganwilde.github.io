var Grid = function(width, height)
{
    // Properties
    this.width = width;
    this.height = height;
    this.points = [];

    // HTML storage
    this.node = document.createElement('div');
    this.node.setAttribute('class', 'grid');

    // Fill the grid up with points
    for (var v = 0; v < this.height; v++) {
        var row = document.createElement('div');
        row.setAttribute('class', 'row');
        this.node.appendChild(row);

        for (var h = 0; h < this.width; h++) {
            // Add the point to the collection
            this.points.push(new Point());

            // Add the point's HTML representation
            this.point(h, v).drawInto(row)
        }
    }
};

Grid.prototype.indexOf = function(x, y)
{
    return this.width * y + x;
};

Grid.prototype.point = function(x, y)
{
    return this.points[this.indexOf(x, y)];
};

Grid.prototype.drawInto = function(target)
{
    target.appendChild(this.node);
};
