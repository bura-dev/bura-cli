const chalk = require("chalk");
const shell = require("shelljs");
const { inquirerProviderFunc } = require("../core/inquirerProvider");
const { __help } = require("./help");

function searchCommandFunc({ inputCMD, jsonData }) {
  let commandCheckStatus = false;
    jsonData.command_list.forEach((element) => {
      if (element && element.name && element.name === inputCMD) {
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
  if (!commandCheckStatus) {
    __help({ jsonData: jsonData });
  }
}

module.exports.searchCommandFunc = searchCommandFunc;
