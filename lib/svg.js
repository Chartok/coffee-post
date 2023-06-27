class SVG {
    // Create SVG class that has an array of elements and a render method that returns a string of SVG elements
    constructor() {
        this.elements = [];
    }

    render(color) {
        const elements = this.elements.map(element => element.render(color));
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${elements.join('')}</svg>`;
    } 

    add(element) {
        this.elements.push(element);
    }
}

module.exports = SVG;