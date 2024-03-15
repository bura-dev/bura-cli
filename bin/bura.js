#! /usr/bin/env node

const inquirer = require("inquirer");
const shell = require("shelljs");
const chalk = require("chalk");
const { validateFunc } = require("./core/jsonFileVlidation");
const { __version } = require("./core/version");
const { __update } = require("./core/update");
const { __help } = require("./core/help");
const { addCommand } = require("./core/addCommand");
const { editeCommand } = require("./core/editeCommand");
const { searchCommandFunc } = require("./core/searchCommand");
const { listCommand } = require("./core/listCommand");
const { deleteCommand } = require("./core/deleteCommand");
const { buraConfigPath } = require("./utils/path");
var fs = require("fs");
const { shellByOpsys } = require("./core/shellByOPSYS");

//status json file
validateFunc();

var count = 0;
inquirer.prompt([]).then((answersFirstCommand) => {
  // shell.exec(`cls`);
  function bura() {
    fs.stat(buraConfigPath, function (err, stats) {
      if (stats && Object.keys(stats).length) {
        fs.readFile(buraConfigPath, "utf8", function (err, data) {
          var jsonData = JSON.parse(data);
          if (err) throw err;
          if (
            process &&
            process.argv &&
            process.argv.length &&
            process.argv[2]
          ) {
            if (
              jsonData &&
              jsonData.command_list &&
              jsonData.command_list.length
            ) {
              const inputCMD = process.argv[2];
              switch (inputCMD) {
                case "--help":
                case "-h":
                  __help({ jsonData: jsonData });
                  break;
                case "me":
                  console.log(chalk.yellow("Show me BURA"));
                  shellByOpsys({
                    linuxCommand: `sensible-browser www.bura.dev`,
                    winCommand: `start www.bura.dev`,
                  });
                  break;
                case "--version":
                case "-v":
                  __version({ version: jsonData.version || "1" });
                  break;
                case "--update":
                case "-u":
                  __update({ version: jsonData.version || "1" });
                  break;
                case "--add":
                case "-a":
                  addCommand({ jsonData: jsonData });
                  break;
                case "--edite":
                case "-e":
                  editeCommand({
                    jsonData: jsonData,
                  });
                  break;
                case "--list":
                case "-l":
                  listCommand({
                    jsonData: jsonData,
                  });
                  break;
                case "--delete":
                case "-d":
                  deleteCommand({
                    jsonData: jsonData,
                  });
                  break;

                default:
                  searchCommandFunc({ inputCMD: inputCMD, jsonData: jsonData });
                  break;
              }
            } else {
              __help({ jsonData: jsonData });
            }
          } else {
            __help({ jsonData: jsonData });
          }
        });
      } else {
        if (count < 10) {
          count++;
          bura();
        } else {
          console.log(chalk.red("Bura config file not fond, try again"));
        }
      }
    });
  }
  try {
    bura();
  } catch (error) {
    console.log(chalk.red("Bura config file not fond, try again"));
  }
});
