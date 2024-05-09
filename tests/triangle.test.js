// TODO import Circle construct
const Triangle = require('../lib/circle');

// TODO test that render function on shape passes

describe('Triangle', () => {
    test('should render a triangle shape using svg', () => {
        const shape = new Triangle(shapeColor = 'blue', textColor = '#222', text = 'IAM');
        expect(shape.render()).toEqual(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,0 190,180 0,180" fill="blue"/>
        <text x="50%" y="50%" style="dominant-baseline: middle; text-anchor: middle; fill: #222; font-family: Arial" font-size="50">IAM</text>
        </svg>`);
    });

    test('Should through an err when color is not valid', () => {
        const shape = new Triangle(shapeColor = 'blue', textColor='#222');
        expect(shape.render()).toEqual(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,0 190,180 0,180" fill="blue"/>
        <text x="50%" y="50%" style="dominant-baseline: middle; text-anchor: middle; fill: #222; font-family: Arial" font-size="50"></text>
        </svg>`);
    });
});