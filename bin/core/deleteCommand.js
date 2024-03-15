const inquirer = require("inquirer");
const chalk = require("chalk");
var fs = require("fs");

const { searchCMD } = require("../utils/inquirerSearchCMD");
const { yesOrNoDelete } = require("../utils/inquirerQuestionsCMD");
const { buraConfigPath, buraConfigBacPath } = require("../utils/path");

function deleteCommand({ jsonData }) {
  inquirer.prompt(searchCMD).then((answers) => {
    inquirer.prompt(yesOrNoDelete).then((answers2) => {
      if (
        answers &&
        answers.selectCommand &&
        answers2 &&
        answers2.deleteQuestions === "Yes"
      ) {
        let selectedItem = {};
        jsonData.command_list.forEach((element) => {
          if (element.name === answers.selectCommand) {
            selectedItem = element;
          }
        });
        if (selectedItem && Object.keys(selectedItem).length) {
          fs.writeFile(
            buraConfigBacPath,
            JSON.stringify(jsonData),
            function (err) {
              if (err) throw err;
            }
          );

          let newJsonData = jsonData;

          newJsonData.command_list = newJsonData.command_list.filter(
            (item) => item.name != selectedItem.name
          );

          fs.writeFile(
            buraConfigPath,
            JSON.stringify(newJsonData),
            function (err) {
              if (err) throw err;
            }
          );
          console.log(chalk.green("Done"));
        }
      }
    });
  });
}

module.exports.deleteCommand = deleteCommand;
