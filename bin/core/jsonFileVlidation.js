var fs = require("fs");
const chalk = require("chalk");
const { defaultJson } = require("../utils/defaultJson");
var request = require("request");
const {
  buraConfigPath,
  buraConfigBacPath,
  buraPath,
} = require("../utils/path");
const { winInstallerDefault } = require("../utils/win-insatll-update");
const { shellByOpsys } = require("./shellByOPSYS");
const { defaultRequestOptions } = require("../utils/defaultRequestOptions");

async function validateFunc() {
  await fileExist().then(async (data) => {
    if (data) {
      await fileCheckElement().then(async (data2) => {
        if (data2) {
        } else {
          console.log(chalk.red("There is a problem, try again"));
        }
      });
    } else {
      console.log(chalk.red("There is a problem, try again"));
    }
  });
}

const fileExist = function () {
  return new Promise((resolve, reject) => {
    try {
      if (!fs.existsSync(buraPath)) {
        fs.mkdirSync(buraPath, {
          recursive: true,
        });
      }

      fs.stat(buraPath, function (err, stats) {
        if (stats && Object.keys(stats).length) {
          if (fs.existsSync(buraConfigPath)) {
            if (!validateJSON(buraConfigPath)) {
              if (fs.existsSync(buraConfigBacPath)) {
                if (validateJSON(buraConfigBacPath)) {
                  fs.readFile(buraConfigBacPath, "utf8", function (err, data) {
                    if (err) throw err;
                    fs.writeFile(buraConfigPath, data, function (err) {
                      if (err) throw err;
                    });
                  });
                } else {
                  fs.writeFile(buraConfigPath, defaultJson, function (err) {
                    if (err) throw err;
                  });
                }
              } else {
                fs.writeFile(buraConfigPath, defaultJson, function (err) {
                  if (err) throw err;
                });
              }
            }
          } else {
            if (fs.existsSync(buraConfigBacPath)) {
              if (validateJSON(buraConfigBacPath)) {
                fs.readFile(buraConfigBacPath, "utf8", function (err, data) {
                  if (err) throw err;
                  fs.writeFile(buraConfigPath, data, function (err) {
                    if (err) throw err;
                  });
                });
              } else {
                fs.writeFile(buraConfigPath, defaultJson, function (err) {
                  if (err) throw err;
                });
              }
            } else {
              fs.writeFile(buraConfigPath, defaultJson, function (err) {
                if (err) throw err;
              });
            }
          }
          resolve(true);
        }
      });
    } catch (error) {
      if (!fs.existsSync(buraPath)) {
        fs.mkdirSync(buraPath, {
          recursive: true,
        });
      }
      if (fs.existsSync(buraConfigBacPath)) {
        if (validateJSON(buraConfigBacPath)) {
          fs.readFile(buraConfigBacPath, "utf8", function (err, data) {
            if (err) throw err;
            fs.writeFile(buraConfigPath, data, function (err) {
              if (err) throw err;
            });
          });
        } else {
          fs.writeFile(buraConfigPath, defaultJson, function (err) {
            if (err) throw err;
          });
        }
      } else {
        fs.writeFile(buraConfigPath, defaultJson, function (err) {
          if (err) throw err;
        });
      }
      resolve(false);
    }
  });
};

const fileCheckElement = function () {
  return new Promise((resolve, reject) => {
    try {
      fs.stat(buraConfigPath, function (err, stats) {
        if (stats && Object.keys(stats).length) {
          fs.readFile(buraConfigPath, "utf8", function (err, data) {
            if (err) throw err;
            var newjsonData = JSON.parse(data);
            var _defaultJson = JSON.parse(defaultJson);
            var updateStatus = false;

            //property update
            for (const property in _defaultJson) {
              if (!newjsonData.hasOwnProperty(property)) {
                newjsonData[property] = _defaultJson[property];
                updateStatus = true;
              }
            }

            //version update
            if (
              newjsonData.version &&
              _defaultJson.version &&
              newjsonData.version !== _defaultJson.version
            ) {
              newjsonData.version = _defaultJson.version;
              updateStatus = true;
            }

            //daily update
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1;
            const currentDay = currentDate.getDate();
            const currentYear = currentDate.getFullYear();

            if (
              (newjsonData.date_check_update,
              newjsonData.date_check_update !==
                `${currentMonth}/${currentDay}/${currentYear}`)
            ) {
              newjsonData.date_check_update = `${currentMonth}/${currentDay}/${currentYear}`;
              updateStatus = true;
              request(defaultRequestOptions, function (error, response) {
                if (error) resolve(false);

                if (response && response.statusCode === 200 && response.body) {
                  var newResponse = JSON.parse(response.body);
                  if (
                    newResponse &&
                    newResponse.version &&
                    `${newResponse.version}` !== `${newjsonData.version}`
                  ) {
                    console.log(
                      chalk.blueBright(
                        `The new update has come with version ${newResponse.version}`
                      )
                    );
                  }
                }
              });
            }

            if (updateStatus) {
              fs.writeFile(
                buraConfigPath,
                JSON.stringify(newjsonData),
                function (err) {
                  if (err) throw err;
                }
              );
            }
          });
          resolve(true);
        } else {
          resolve(false);
        }
      });
    } catch (error) {
      resolve(false);
    }
  });
};

function validateJSON(path) {
  try {
    JSON.parse(JSON.stringify(fs.readFileSync(path)));
    return true;
  } catch (e) {
    // failed to parse
    return false;
  }
}

module.exports.validateFunc = validateFunc;
