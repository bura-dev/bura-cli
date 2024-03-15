var fs = require("fs");
const { buraConfigPath } = require("./path");

function commandProvideList() {
  if (fs.existsSync(buraConfigPath)) {
    const bufferData = fs.readFileSync(buraConfigPath);
    let stData = bufferData.toString();
    let jsonData = JSON.parse(stData);
    let newList = [];
    jsonData.command_list.forEach((element) => {
      newList.push(element.name);
    });
    return newList;
  } else {
    return [];
  }
}

const searchCMD = [
  {
    type: "list",
    name: "selectCommand",
    message: "Select a command:",
    choices: commandProvideList(),
  },
];

module.exports.searchCMD = searchCMD;
