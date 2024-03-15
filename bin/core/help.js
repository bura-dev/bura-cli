const chalk = require("chalk");
const boxen = require("boxen");
const { DescriptionCMD } = require("../utils/staticCMD");

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#ffffff",
};

function __help({ jsonData }) {
  let counter = 0;
  console.log(
    boxen(
      chalk.blueBright("Hi there! \nYou can use the following commands..."),
      boxenOptions
    )
  );
  console.log(
    chalk.white(
      "******************************Static Commands******************************"
    )
  );
  DescriptionCMD.forEach((element, index) => {
    let cmdText = "";
    counter++;
    element.cmd.forEach((element2, index2) => {
      if (element2 && element.cmd.length > 1 && index2 < 1) {
        cmdText = cmdText + element2 + " or ";
      } else {
        cmdText = cmdText + element2;
      }
    });
    console.log(
      chalk.red(`[${counter}]:`),
      chalk.green(`< ${cmdText} >`),
      chalk.red(` => `),
      chalk.blue(`${element.description}`)
    );
  });
  console.log(
    chalk.white(
      "*******************************Your Commands*******************************"
    )
  );
  jsonData.command_list.forEach((element) => {
    if (element && Object.keys(element).length) {
      counter++;
      console.log(
        chalk.red(`[${counter}]:`),
        chalk.green(`< ${element.name} >`),
        chalk.red(` => `),
        chalk.yellow(`{ ${element.command} }`),
        chalk.red(` => `),
        chalk.blue(`${element.description}`)
      );
    }
  });
}

module.exports.__help = __help;
