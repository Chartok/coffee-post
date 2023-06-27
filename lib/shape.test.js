const { Circle, Triangle, Square, Star, CrescentMoon } = require("./shapes");

// Test the shapes by creating a new instance of them and calling the render method
describe("Circle", () => {
    test("should render svg for a green circle element", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
        const circle = new Circle("green");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});


describe("Triangle", () => {
    test("should render svg for a green polygon element", () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
        const triangle = new Triangle("bisque");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Square", () => {
    test("should render svg for a green polygon element", () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
        const square = new Square("dodgerblue");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Star", () => {
    test("should render svg for a star element", () => {
        const expectedSvg = '<polygon points="50,5 20,99 95,39 5,39 80,99" fill="yellow" />';
        const star = new Star("yellow");
        const actualSvg = star.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("CrescentMoon", () => {
    test("should render svg for a CrescentMoon element", () => {
        const expectedSvg = '<path d="M50 100 Q70 0 50 0 Q70 100 50 100" fill="white" />';
        const crescentMoon = new CrescentMoon("white");
        const actualSvg = crescentMoon.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

