const inquirer = require("inquirer");
const shell = require("shelljs");

async function inquirerProviderFunc({ commandData }) {
  let newCMD = commandData.command;
  await getCMD(commandData.input_name_list, newCMD).then(async (data) => {
    if (data) {
      shell.exec(data);
    }
  });
}

const getCMD = function (input_name_list, newCMD) {
  return new Promise((resolve, reject) => {
    let count = 0;
    try {
      function _getCMD() {
        inquirer
          .prompt({
            type: input_name_list[count].type || "text",
            name: input_name_list[count].name || "input",
            message: `Enter ${input_name_list[count].name || ""} value :`,
            default() {
              return input_name_list[count].default || "";
            },
            validate(answer) {
              if (answer.length < 1) {
                return "You must enter a value.";
              }
              return true;
            },
          })
          .then((answers) => {
            if (answers && answers[input_name_list[count].name || "input"]) {
              if (input_name_list[count].type === "number") {
                newCMD = newCMD.replace(
                  `#${input_name_list[count].name || ""}:${
                    input_name_list[count].default
                  }#`,
                  answers[input_name_list[count].name || "input"] ||
                    "Incorrect value"
                );
              } else {
                newCMD = newCMD.replace(
                  `$${input_name_list[count].name || ""}:${
                    input_name_list[count].default
                  }$`,
                  answers[input_name_list[count].name || "input"] ||
                    "Incorrect value"
                );
              }

              if (count < input_name_list.length - 1) {
                count++;
                _getCMD();
              } else {
                resolve(newCMD);
              }
            }
          });
      }
      _getCMD();
    } catch (error) {
      resolve(newCMD);
    }
  });
};

module.exports.inquirerProviderFunc = inquirerProviderFunc;
