const chalk = require("chalk");
const boxen = require("boxen");

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#ffffff",
};

function __version({ version }) {
  console.log(
    boxen(chalk.blueBright(`Bura CLI version ${version}`), boxenOptions)
  );
}

module.exports.__version = __version;
