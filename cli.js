// TODO import inquirer
const inquirer = require('inquirer');
// TODO import shapes
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
// import color-string for validation
const colorString = require('color-string');
// TODO import fs
const { writeFile } = require('fs/promises');


// Function to write svg content to file. 
function createLogo (svg) {
    writeFile('logo.svg', svg);
    console.log('Logo generation successful!')
}

function isColorKeyword (color) {
    const tempColor = color.toLowerCase()
    const colorObject = colorString.get(tempColor);
    console.log(!!colorObject);
    return !!colorObject;
}


// TODO Create questions for inquirer
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What type of shape would you like for your logo?',
        choices: ['Triangle', 'Square', 'Circle']
},

{
    type: 'input',
    name: 'shapeColor',
    message: 'Please input shape color. Must be either a valid color keyword or hexadecimal code',
    validate: function (shapeColor) {
        let test1 = isColorKeyword(shapeColor);
        let valid = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/.test(shapeColor);

        if (valid || test1) {
            return true;
        }
        console.log('Input must be either a valid color keyword or hexadecimal code');
        return false;
    }
},
{
    type: 'input',
    name: 'text',
    message: 'Please input text. Input must be either 3 characters or less',
    validate: function (text) {
        if (text.length < 0 || text.length > 3) {
            console.log('Input must be either 3 characters or less')
            return false;
        } else {
            return true;
        }
    }
},
{
    type: 'input',
    name: 'textColor',
    message: 'Please input text color. Must be either a valid color keyword or hexadecimal code',
    validate: function (shapeColor) {
        let test1 = isColorKeyword(shapeColor);
        let valid = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/.test(shapeColor);

        if (valid || test1) {
            return true;
        }
        console.log('Input must be either a valid color keyword or hexadecimal code');
        return false;
}];

const CLI = (() => inquirer
    .prompt(questions)
    .then((data) => {
        if(data.shape == 'Triangle') {
            let shape = new Triangle([], data.shapeColor, data.textColor, data.text);
            const svg = shape.render();
            createLogo(svg);

        } else if (data.shape == 'Square') {
            let shape = new Square([], data.shapeColor, data.textColor, data.text);
            const svg = shape.render();
            createLogo(svg);
        } else if (data.shape == 'Circle') {
            let shape = new Circle([], data.shapeColor, data.textColor, data.text);
            const svg = shape.render(); 
            createLogo(svg);
        }
    }));

CLI() 
