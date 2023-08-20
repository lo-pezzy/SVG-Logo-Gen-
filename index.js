const inquirer = require('inquirer');
const fs = require('fs');
const (Circle, Triangle, Square) = require('./lib/shapes.js');

function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: "shape",
            message: "What shape would you like to create?",
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color would you like your shape to be?'
            choices: ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'black', 'white']
        },
        {
            type: 'input',
            name: 'text',
            message: 'What three letters would you like to put on your logo?'
        }
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like your letters to be?'
        }
    ])
    .then(function (results){
        let shape = results.shape;
        let svgWrap;
        switch (shape) {
            case 'Circle':
                shape = new Circle();
                break;
            case 'Triangle':
                shape = new Triangle();
                break;
            case 'Square':
                shape = new Square();
                break;
            default:
                console.log('Something went wrong');
                break;
        }
        shape.setColor(results.color)
        shape.setText(results.text)
        shape.setTextColor(results.textColor)
        shape.setShapeColor(results.shapeColor)
        svgWrap = `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${shape.getShape()}</svg>`
        $shape.render();
        <text x="50%" y="50%" text-anchor="middle" stroke="black" stroke-width="1px" dy=".3em">${shape.getText()}</text>
        fs.writeFile("./examples/test.svg", svgWrap, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success! Its Been Created!");
        });
    })
}
init();