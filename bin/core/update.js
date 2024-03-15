const chalk = require("chalk");
var request = require("request");
const inquirer = require("inquirer");
const { updateCMD } = require("../utils/inquirerUpdateCMD");
const { download } = require("./fileDownload");
const {
  winInsatallerPath,
  buraPath,
  linuxInsatallerPath,
} = require("../utils/path");
const { shellByOpsys } = require("./shellByOPSYS");
const { defaultRequestOptions } = require("../utils/defaultRequestOptions");
var fs = require("fs");
const { winInstallerDefault } = require("../utils/win-insatll-update");
const { linuxInstallerDefault } = require("../utils/linux-install-update");
var cmd = require("node-cmd");

function __update({ version }) {
  request(defaultRequestOptions, function (error, response) {
    if (error)
      return console.log(chalk.red("There is a problem, try again later"));

    if (response && response.statusCode === 200 && response.body) {
      try {
        var newResponse = JSON.parse(response.body);
        if (
          newResponse &&
          newResponse.version &&
          newResponse.version !== `${version}`
        ) {
          var opsys = shellByOpsys({});
          if (opsys) {
            inquirer.prompt(updateCMD).then((answers) => {
              if (answers && answers.selectPath) {
                if (opsys === "Windows") {
                  var selectPath = answers.selectPath.split("\\");
                  selectPath.pop();
                  var newSelectPath = selectPath.join("\\");

                  if (fs.existsSync(`${buraPath}\\bura-win.rar`)) {
                    try {
                      fs.unlinkSync(`${buraPath}\\bura-win.rar`);
                    } catch (err) {
                      console.error(err);
                    }
                  }

                  if (fs.existsSync(winInsatallerPath)) {
                    try {
                      fs.unlinkSync(winInsatallerPath);
                      fs.writeFile(
                        winInsatallerPath,
                        winInstallerDefault,
                        function (err) {
                          if (err) throw err;
                        }
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  } else {
                    fs.writeFile(
                      winInsatallerPath,
                      winInstallerDefault,
                      function (err) {
                        if (err) throw err;
                      }
                    );
                  }

                  download({
                    url: newResponse.win_update_link,
                    filename: `${buraPath}\\bura-win.rar`,
                    // answers.selectPath,
                    callback: function (response) {
                      if (response) {
                        shellByOpsys({
                          winCommand: `${winInsatallerPath} ${answers.selectPath} ${newSelectPath}`,
                        });
                      } else {
                        console.log(
                          chalk.red("There is a problem, try again later")
                        );
                      }
                    },
                  });
                } else {
                  var selectPath = answers.selectPath.split("/");
                  selectPath.pop();
                  var newSelectPath = selectPath.join("/");

                  if (fs.existsSync(`${buraPath}/bura-linux.rar`)) {
                    try {
                      fs.unlinkSync(`${buraPath}/bura-linux.rar`);
                    } catch (err) {
                      console.error(err);
                    }
                  }

                  if (fs.existsSync(linuxInsatallerPath)) {
                    try {
                      fs.unlinkSync(linuxInsatallerPath);
                      fs.writeFile(
                        linuxInsatallerPath,
                        linuxInstallerDefault,
                        function (err) {
                          if (err) throw err;

                          var linuxInsatallerPathChmode = cmd.runSync(
                            `sudo chmod +x ${linuxInsatallerPath}`
                          );
                          if (linuxInsatallerPathChmode.err) {
                            console.log(
                              chalk.red("There is a problem, try again")
                            );
                          }
                        }
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  } else {
                    fs.writeFile(
                      linuxInsatallerPath,
                      linuxInstallerDefault,
                      function (err) {
                        if (err) throw err;
                        // return null;

                        var linuxInsatallerPathChmode = cmd.runSync(
                          `sudo chmod +x ${linuxInsatallerPath}`
                        );
                        if (linuxInsatallerPathChmode.err) {
                          console.log(
                            chalk.red("There is a problem, try again")
                          );
                        }
                      }
                    );
                  }
                  download({
                    url: newResponse.linux_update_link,
                    filename: `${buraPath}/bura-linux.rar`,
                    // answers.selectPath,
                    callback: function (response) {
                      if (response) {
                        shellByOpsys({
                          linuxCommand: `sudo ${linuxInsatallerPath} ${answers.selectPath} ${newSelectPath} ${buraPath}`,
                        });
                      } else {
                        console.log(
                          chalk.red("There is a problem, try again later")
                        );
                      }
                    },
                  });
                }
              }
            });
          } else {
            console.log(chalk.red("There is a problem, try again later"));
          }
        } else {
          console.log(
            chalk.yellow("You have already received the latest update")
          );
        }
      } catch (error) {
        console.log(chalk.red("There is a problem, try again later"));
      }
    } else {
      console.log(chalk.red("There is a problem, try again later"));
    }
  });
}

module.exports.__update = __update;
