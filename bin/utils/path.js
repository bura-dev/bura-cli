const _path = require("os").homedir();
let path = _path.split("\\").join("/");
const shell = require("shelljs");

const currentPath = require("path").resolve("./");

const buraConfigPath = `${path}/.bura/bura-config.json`;
const buraConfigBacPath = `${path}/.bura/bura-config-bac.json`;
const buraPath = `${path}/.bura`;
const winInsatallerPath = `${path}/.bura/win-insatll-update.bat`;
const linuxInsatallerPath = `${path}/.bura/linux-insatll-update.sh`;

module.exports.buraConfigPath = buraConfigPath;
module.exports.buraConfigBacPath = buraConfigBacPath;
module.exports.buraPath = buraPath;
module.exports.currentPath = currentPath;
module.exports.winInsatallerPath = winInsatallerPath;
module.exports.linuxInsatallerPath = linuxInsatallerPath;
