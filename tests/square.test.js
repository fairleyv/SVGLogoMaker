// TODO import Circle construct
const Square = require('../lib/circle');

// TODO test that render function on shape passes

describe('Square', () => {
    test('should render a Square shape using svg', () => {
        const shape = new Square(shapeColor = 'blue', textColor = '#222', text='IAM');
        expect(shape.render()).toEqual(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="100" height="100" fill="blue"/>
        <text x="50%" y="50%" style="dominant-baseline: middle; text-anchor: middle; fill: #222; font-family: Arial" font-size="40">IAM</text>
        </svg>`);
    });

    test('should render a Square shape using svg without any text', () => {
        const shape = new Square(shapeColor = 'blue', textColor = '#222');
        expect(shape.render()).toEqual(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="100" height="100" fill="blue"/>
        <text x="50%" y="50%" style="dominant-baseline: middle; text-anchor: middle; fill: #222; font-family: Arial" font-size="40"></text>
        </svg>`);
    });
});
