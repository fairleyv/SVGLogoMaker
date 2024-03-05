// TODO test that render function on shape passes

describe('Square', () => {
    test('should render a triangle shape using svg', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('rect x="100" y="100" width="60" height="60" fill="blue" />');
    });

    test('Should through an err when color is not valid', () => {
        const shape = new Square();
        shape.setColor("greenturple");
        const err = Error('Color must be a valid color keyword or hexadecimal code');
        expect(shape.render).toThrow(err);
    })
});
