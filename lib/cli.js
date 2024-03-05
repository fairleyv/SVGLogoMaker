// TODO import inquirer
const inquirer = require('inquirer');
// TODO import shapes
const circle = require('./circle');
const square = require('./square');
const triangle = require('./triangle');
// TODO import fs
const { writeFile } = require('fs/promises');

// TODO Create questions for inquirer
const questions = [{}]

// TODO create a CLI class that runs inquirer and the SVG logo maker
class CLI {
    constructor () {
        this.questions = questions;

    }
    run () {
        return inquirer
            .prompt(questions)
    }

    logoText() {
        return inquirer
            .prompt([
                {

            }
        ])
    }
}
// TODO Use Inquirer to get data for making SVG Logo

// TODO create a function that makes the SVG Data using inquirer

// TODO Write SVG data to a new file called logo.svg 