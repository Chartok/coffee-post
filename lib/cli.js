const inquirer = require("inquirer");
const SVG = require("./svg");
const ShapeFactory = require("./shapes");
const { writeFile } = require("fs/promises");
const Text = require("./text");

class CLI {
    async run() {
        try {
            const { text, textColor, shapeType, shapeColor } = await inquirer.prompt([
                {
                    name: "text",
                    type: "input",
                    message: "What is the text for the logo? (No more than 3 characters.)",
                    validate: (text) => text.length <= 3 || "The message must not contain more than 3 characters",
                },
                {
                    name: "textColor",
                    type: "input",
                    message: "What is the color of the text?",
                },
                {
                    name: "shapeType",
                    type: "list",
                    message: "What is the shape of the logo?",
                    choices: ["circle", "square", "triangle"],
                },
                {
                    name: "shapeColor",
                    type: "input",
                    message: "What is the color of the shape?",
                },
            ]);

            const shape = ShapeFactory.create(shapeType);
            const textElement = new Text(text, textColor);

            const svg = new SVG();
            svg.add(textElement);
            svg.add(shape);

            await writeFile("logo.svg", svg.render(shapeColor));
            console.log("logo.svg created!");
        } catch (error) {
            console.log(error);
            console.log("There was an error.");
        }
    }
}

module.exports = CLI;