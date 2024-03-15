const inquirer = require("inquirer");
const shell = require("shelljs");
const chalk = require("chalk");

const { searchCMD } = require("../utils/inquirerSearchCMD");
const { inquirerProviderFunc } = require("./inquirerProvider");

function listCommand({ jsonData }) {
  inquirer.prompt(searchCMD).then((answers) => {
    jsonData.command_list.forEach((element) => {
      if (element && element.name && element.name === answers.selectCommand) {
        commandCheckStatus = true;
        if (element.description) {
          console.log(chalk.yellow(element.description));
        }
        if (element.command) {
          if (element.input_name_list.length === 0) {
            shell.exec(`${element.command}`);
          } else {
            inquirerProviderFunc({ commandData: element });
          }
        } else {
          console.log(chalk.red("There is a problem with this command"));
        }
      }
    });
  });
}

module.exports.listCommand = listCommand;
