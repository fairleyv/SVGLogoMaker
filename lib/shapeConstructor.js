class Shape {
    constructor (children = [], shapeColor = '', textColor = '', text = '') {
        this.children = children;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
      }
    };

module.exports = Shape;