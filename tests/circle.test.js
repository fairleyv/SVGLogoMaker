// TODO test that render function on shape passes

describe('Circle', () => {
    test('should render a triangle shape using svg', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('circle cx="75" cy="100" r="20" fill="blue" />');
    });
    test('Should through an err when color is not valid', () => {
        const shape = new Circle();
        shape.setColor("greenturple");
        const err = Error('Color must be a valid color keyword or hexadecimal code');
        expect(shape.render).toThrow(err);
    });
});