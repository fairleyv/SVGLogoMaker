// TODO import Circle construct
const Circle = require('../lib/circle');

// TODO test that render function on shape passes

describe('Circle', () => {
    test('should render a Circle shape using svg', () => {
        const shape = new Circle(shapeColor = 'blue');
        expect(shape.render()).toEqual('<circle cx="75" cy="100" r="20" fill="blue" />');
    });
    test('Should through an err when color is not valid', () => {
        const shape = new Circle();
        const err = Error('Color must be a valid color keyword or hexadecimal code');
        expect(shape.render).toThrow(err);
    });
});