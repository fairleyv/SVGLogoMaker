// TODO import Circle construct
const Circle = require('../lib/circle');

// TODO test that render function on shape passes

describe('Circle', () => {
    test('should render a Circle shape using svg', () => {
        const shape = new Circle(shapeColor = 'blue', textColor = '#222', text = "IAM");
        expect(shape.render()).toEqual(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="75" fill="blue" />
        <text x="50%" y="50%" style="dominant-baseline: middle; text-anchor: middle; fill: #222; font-family: Arial" font-size="50">IAM</text>
        </svg>`);
    });
    test('Should render an svg without text', () => {
        const shape = new Circle(shapeColor = 'blue', textColor = '#222');
        expect(shape.render()).toEqual(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="75" fill="blue" />
        <text x="50%" y="50%" style="dominant-baseline: middle; text-anchor: middle; fill: ; font-family: Arial" font-size="50"></text>
        </svg>`);
    });
});