const ShapeFactory = require('./shapes');

const shapes = [
    {
        type: 'circle',
        expected: '<circle cx="150" cy="100" r="80" fill="green" />'
    },
    {
        type: 'square',
        expected: '<rect x="90" y="40" width="120" height="120" fill="green" />'
    },
    {
        type: 'triangle',
        expected: '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    }
];

for (const shape of shapes) {
    test(`should render SVG for a ${shape.type}`, () => {
        const createdShape = ShapeFactory.create(shape.type);
        const actualSvg = createdShape.render('green');
        expect(actualSvg).toEqual(shape.expected);
    });
}
