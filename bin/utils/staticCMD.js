const staticCMD = [
  "--help",
  "-h",
  "--version",
  "-v",
  "--add",
  "-a",
  "--delete",
  "-d",
  "--edite",
  "-e",
  "--update",
  "-u",
  "--list",
  "-l",
  "me",
];
const DescriptionCMD = [
  { cmd: ["--help", "-h"], description: "Bura guide" },
  { cmd: ["--version", "-v"], description: "View version" },
  { cmd: ["--add", "-a"], description: "Add command" },
  { cmd: ["--delete", "-d"], description: "Delete command" },
  { cmd: ["--edite", "-e"], description: "Edite command" },
  { cmd: ["--update", "-u"], description: "Bura update" },
  {
    cmd: ["--list", "-l"],
    description: "View the list of commands and use it",
  },
  { cmd: ["me"], description: "View BURA 😎" },
];

module.exports.staticCMD = staticCMD;
module.exports.DescriptionCMD = DescriptionCMD;
