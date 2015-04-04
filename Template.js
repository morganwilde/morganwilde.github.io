var Template = function()
{
    this.pageNumberMin = 0;
    this.pageNumberMax = 4;
};

Template.prototype.generateHeader = function()
{
    pageTitle = document.querySelector('title').text;
    header = document.querySelector('header');
    headingNode = document.createElement('h1');
    headingNode.appendChild(document.createTextNode(pageTitle));
    header.appendChild(headingNode);
};

Template.prototype.generateFooter = function()
{
    // Analyse the path
    pathComponents = window.location.href.split('/');
    componentFilename = pathComponents[pathComponents.length - 1].split('-');
    if (componentFilename.length > 1) {
        pageNumber = Number(componentFilename[1].split('.')[0]);
    } else {
        pageNumber = 0;
    }

    // Create the footer navigation
    footer = document.querySelector('footer');
    leftDiv = document.createElement('div');
    rightDiv = document.createElement('div');

    leftDiv.setAttribute('class', 'left');
    rightDiv.setAttribute('class', 'right');

    // Check for boundaries
    if (pageNumber > this.pageNumberMin) {
        leftLink = document.createElement('a');
        leftLink.setAttribute('href', 'page-' + (pageNumber - 1) + '.html');
        leftLink.appendChild(document.createTextNode('Previous'));

        leftDiv.appendChild(leftLink);
    }
    if (pageNumber < this.pageNumberMax) {
        rightLink = document.createElement('a');
        rightLink.setAttribute('href', 'page-' + (pageNumber + 1) + '.html');
        rightLink.appendChild(document.createTextNode('Next'));

        rightDiv.appendChild(rightLink);
    }

    footer.appendChild(leftDiv);
    footer.appendChild(rightDiv);
};

Template.prototype.generatePageStructure = function()
{
    this.generateHeader();
    this.generateFooter();
};
