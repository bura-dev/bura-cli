const shell = require("shelljs");

function shellByOpsys({
  winCommand = "",
  linuxCommand = "",
  macosCommand = "",
}) {
  var opsys = process.platform;
  if (opsys == "darwin") {
    macosCommand && shell.exec(macosCommand);
    return "MacOS";
  } else if (opsys == "win32" || opsys == "win64") {
    winCommand && shell.exec(winCommand);
    return "Windows";
  } else if (opsys == "linux") {
    linuxCommand && shell.exec(linuxCommand);
    return "Linux";
  }
}

module.exports.shellByOpsys = shellByOpsys;
