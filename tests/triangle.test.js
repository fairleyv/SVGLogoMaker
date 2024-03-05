// TODO test that render function on shape passes

describe('Triangle', () => {
    test('should render a triangle shape using svg', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    test('Should through an err when color is not valid', () => {
        const shape = new Triangle();
        shape.setColor("greenturple");
        const err = Error('Color must be a valid color keyword or hexadecimal code');
        expect(shape.render).toThrow(err);
    });
});