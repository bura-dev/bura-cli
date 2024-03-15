const inquirer = require("inquirer");
const shell = require("shelljs");
const chalk = require("chalk");
const boxen = require("boxen");
var fs = require("fs");

const { addCMD, simpleCMD, inputCMD } = require("../utils/inquirerAddCMD");
const { staticCMD } = require("../utils/staticCMD");
const { buraConfigPath, buraConfigBacPath } = require("../utils/path");

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#ffffff",
};

function addCommand({ jsonData }) {
  var _data = [];
  staticCMD.forEach((element, index) => {
    if (index % 2 === 0) {
      _data.push("\n" + element);
    } else {
      _data.push(element);
    }
  });
  console.log(
    boxen(chalk.blueBright(`Please dont use\n[${_data}\n]`), boxenOptions)
  );
  inquirer.prompt(addCMD).then((answers) => {
    if (answers.kind === "command with inputs") {
      console.log(
        chalk.red(
          "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
        )
      );
      console.log(
        chalk.yellowBright(
          "For string inputs use $input:default$ like $site:google$ (The inputs and default is mandatory)"
        )
      );
      console.log(chalk.gray("And"));
      console.log(
        chalk.yellowBright(
          "For number inputs use #input:default# like #age:30# (The default is mandatory)"
        )
      );
      console.log(
        chalk.red(
          "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
        )
      );
      inquirer.prompt(inputCMD).then((inputAnswers) => {
        if (inputAnswers.inputCommand) {
          let splitStringData = inputAnswers.inputCommand.split("$");
          let splitNumberData = inputAnswers.inputCommand.split("#");
          let newData = {
            name: answers.commandName || "example",
            command: inputAnswers.inputCommand || "ping www.google.com",
            description:
              inputAnswers.inputDescriptionCommand || "No description",
            input_name_list: [],
          };

          splitStringData.forEach((element) => {
            if (inputAnswers.inputCommand.includes(`$${element}$`)) {
              var elementSplit = element.split(":");
              if (elementSplit && elementSplit.length > 1) {
                newData.input_name_list.push({
                  name: elementSplit[0] || "",
                  type: "text",
                  default: elementSplit[1] || "",
                });
              }
            }
          });
          splitNumberData.forEach((element) => {
            if (inputAnswers.inputCommand.includes(`#${element}#`)) {
              var elementSplit = element.split(":");
              if (elementSplit && elementSplit.length > 1) {
                newData.input_name_list.push({
                  name: elementSplit[0] || "",
                  type: "number",
                  default: elementSplit[1] || "",
                });
              }
            }
          });
          fs.writeFile(
            buraConfigBacPath,
            JSON.stringify(jsonData),
            function (err) {
              if (err) throw err;
            }
          );
          let newJsonData = jsonData;

          newJsonData.command_list.push(newData);
          fs.writeFile(
            buraConfigPath,
            JSON.stringify(newJsonData),
            function (err) {
              if (err) throw err;
            }
          );

          console.log(chalk.green("Done"));
        }
      });
    } else {
      inquirer.prompt(simpleCMD).then((simpleAnswers) => {
        fs.writeFile(
          buraConfigBacPath,
          JSON.stringify(jsonData),
          function (err) {
            if (err) throw err;
          }
        );

        let newData = {
          name: answers.commandName || "example",
          command: simpleAnswers.simpleCommand || "ping www.google.com",
          description:
            simpleAnswers.simpleDescriptionCommand || "No description",
          input_name_list: [],
        };
        let newJsonData = jsonData;

        newJsonData.command_list.push(newData);

        fs.writeFile(
          buraConfigPath,
          JSON.stringify(newJsonData),
          function (err) {
            if (err) throw err;
          }
        );

        console.log(chalk.green("Done"));
      });
    }
  });
}

module.exports.addCommand = addCommand;
