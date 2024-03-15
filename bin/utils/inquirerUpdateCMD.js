var cmd = require("node-cmd");
const { shellByOpsys } = require("../core/shellByOPSYS");

function buraPathList() {
  var opsys = shellByOpsys({});
  var syncBuraPath;
  if (opsys === "Linux") {
    syncBuraPath = cmd.runSync("whereis bura");
  } else {
    syncBuraPath = cmd.runSync("where bura");
  }
  if (syncBuraPath && syncBuraPath.err) {
    return [];
  } else if (syncBuraPath && syncBuraPath.data) {
    var buraPath = [];

    if (opsys === "Linux") {
      var syncBuraPathSplit = syncBuraPath.data.split("bura: ");
      if (syncBuraPathSplit && syncBuraPathSplit.length) {
        syncBuraPathSplit.forEach((element) => {
          if (element) {
            buraPath = element.split("\n");
          }
        });
      }
    } else {
      buraPath = syncBuraPath.data.split("\r\n");
    }
    var newBuraPath = [];

    buraPath.forEach((element) => {
      if (element) {
        newBuraPath.push(element);
      }
    });
    return newBuraPath;
  } else {
    return [];
  }
}

const updateCMD = [
  {
    type: "list",
    name: "selectPath",
    message: "What is the storage path of Bura? (Enter)",
    choices: buraPathList(),
  },
];

module.exports.updateCMD = updateCMD;
