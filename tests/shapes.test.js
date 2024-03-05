// Import shapes class
const Shapes = require('../lib/shapes.js');

// test if render throws an error when called on shapes instead of child
describe('Shape', () => {
  test('should throw error if render() is called', () => {
    const shape = new Shapes();
    const err = new Error('Child class must implement a render() method.')
    expect(shape.render).toThrow(err);
  });
});