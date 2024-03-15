const inquirer = require("inquirer");
const chalk = require("chalk");
var fs = require("fs");

const { staticCMD } = require("../utils/staticCMD");
const { searchCMD } = require("../utils/inquirerSearchCMD");
const { buraConfigPath, buraConfigBacPath } = require("../utils/path");

function editeCommand({ jsonData }) {
  let selectedItem = {};
  inquirer.prompt(searchCMD).then((answers) => {
    if (answers && answers.selectCommand) {
      jsonData.command_list.forEach((element) => {
        if (element.name === answers.selectCommand) {
          selectedItem = element;
        }
      });
      if (selectedItem && Object.keys(selectedItem).length) {
        inquirer
          .prompt([
            {
              type: "text",
              name: "commandName",
              message: "your old Bura command name:",
              default() {
                return selectedItem.name || "example";
              },
              validate(answer) {
                const bufferData = fs.readFileSync(buraConfigPath);
                let stData = bufferData.toString();
                let jsonData = JSON.parse(stData);
                let answerStatus = false;
                jsonData.command_list.forEach((element) => {
                  staticCMD.forEach((element2) => {
                    if (
                      (element.name === answer &&
                        answer !== selectedItem.name) ||
                      element2 === answer
                    ) {
                      answerStatus = true;
                    }
                  });
                });
                if (answerStatus) {
                  return "This command is available";
                } else {
                  return true;
                }
              },
            },
            {
              type: "list",
              name: "kind",
              message: "Specify the type of command:",
              choices: ["simple command", "command with inputs"],
            },
          ])
          .then((answers) => {
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
              inquirer
                .prompt([
                  {
                    type: "text",
                    name: "inputCommand",
                    message: "your old command:",
                    default() {
                      return selectedItem.command;
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
                    message: "your old command description:",
                    default() {
                      return selectedItem.description;
                    },
                  },
                ])
                .then((inputAnswers) => {
                  if (inputAnswers.inputCommand) {
                    let splitStringData = inputAnswers.inputCommand.split("$");
                    let splitNumberData = inputAnswers.inputCommand.split("#");
                    let newData = {
                      name: answers.commandName || "example",
                      command:
                        inputAnswers.inputCommand || "ping www.google.com",
                      description:
                        inputAnswers.inputDescriptionCommand ||
                        "No description",
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
                            type: "text",
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

                    newJsonData.command_list.forEach((element) => {
                      if (element.name === selectedItem.name) {
                        element.name = newData.name;
                        element.command = newData.command;
                        element.description = newData.description;
                        element.input_name_list = newData.input_name_list;
                      }
                    });

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
              inquirer
                .prompt([
                  {
                    type: "text",
                    name: "simpleCommand",
                    message: "your old command:",
                    default() {
                      return selectedItem.command;
                    },
                  },
                  {
                    type: "text",
                    name: "simpleDescriptionCommand",
                    message: "your old command description:",
                    default() {
                      return selectedItem.description;
                    },
                  },
                ])
                .then((simpleAnswers) => {
                  fs.writeFile(
                    buraConfigBacPath,
                    JSON.stringify(jsonData),
                    function (err) {
                      if (err) throw err;
                    }
                  );

                  let newData = {
                    name: answers.commandName || "example",
                    command:
                      simpleAnswers.simpleCommand || "ping www.google.com",
                    description:
                      simpleAnswers.simpleDescriptionCommand ||
                      "No description",
                    input_name_list: [],
                  };

                  let newJsonData = jsonData;

                  newJsonData.command_list.forEach((element) => {
                    if (element.name === selectedItem.name) {
                      element.name = newData.name;
                      element.command = newData.command;
                      element.description = newData.description;
                      element.input_name_list = newData.input_name_list;
                    }
                  });

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
    }
  });
}

module.exports.editeCommand = editeCommand;
