var fs = require("fs");
const { buraConfigPath } = require("./path");
const { staticCMD } = require("./staticCMD");

const addCMD = [
  {
    type: "text",
    name: "commandName",
    message: "Enter your bura command name:",
    default() {
      return "example";
    },
    validate(answer) {
      if (fs.existsSync(buraConfigPath)) {
        const bufferData = fs.readFileSync(buraConfigPath);
        let stData = bufferData.toString();
        let jsonData = JSON.parse(stData);
        let answerStatus = false;
        jsonData.command_list.forEach((element) => {
          staticCMD.forEach((element2) => {
            if (element.name === answer || element2 === answer) {
              answerStatus = true;
            }
          });
        });
        if (answerStatus) {
          return "This command is available";
        } else {
          return true;
        }
      }
    },
  },
  {
    type: "list",
    name: "kind",
    message: "Specify the type of command:",
    choices: ["simple command", "command with inputs"],
    // type: 'checkbox',
    // name: 'kind',
    // message: 'Choose the JS framework which you are using:',
    // choices: [
    // 	{
    // 		name: 'Simple command',
    // 		checked: true,
    // 	},
    // 	{
    // 		name: 'Command with input',
    // 	},
    // ],
  },
];

const simpleCMD = [
  {
    type: "text",
    name: "simpleCommand",
    message: "Enter your command:",
    default() {
      return "ping www.google.com";
    },
  },
  {
    type: "text",
    name: "simpleDescriptionCommand",
    message: "Enter your command description:",
    default() {
      return "No description";
    },
  },
];

const inputCMD = [
  {
    type: "text",
    name: "inputCommand",
    message: "Enter your command with inputs:",
    default() {
      return "ping www.$site:google$.$domain:com$";
    },
    validate(answer) {
      let splitStringData = answer.split("$");
      let splitNumberData = answer.split("#");
      if (
        (splitStringData.length,
        (splitStringData.length - 1 !== 0
          ? splitStringData.length - 1
          : splitStringData.length) %
          2 ===
          0)
      ) {
        return true;
      } else if (
        (splitNumberData.length,
        (splitNumberData.length - 1 !== 0
          ? splitNumberData.length - 1
          : splitNumberData.length) %
          2 ===
          0)
      ) {
        return true;
      } else {
        return "Please enter the entries according to the guide.";
      }
    },
  },
  {
    type: "text",
    name: "inputDescriptionCommand",
    message: "Enter your command description:",
    default() {
      return "No description";
    },
  },
];

const questionsTs = [
  {
    type: "list",
    name: "typescript",
    message: "Does your project use TypeScript?",
    choices: ["Yes", "No"],
  },
  {
    type: "number",
    name: "firstCommand",
    message: "Can I help you :",
    default() {
      return 0;
    },
    validate(answer) {
      if (answer.length < 1) {
        return "You must choose at least one topping.";
      }

      return true;
    },
  },
];

module.exports.addCMD = addCMD;
module.exports.simpleCMD = simpleCMD;
module.exports.inputCMD = inputCMD;
