const defaultJson = JSON.stringify({
  version: 1.3,
  help_status: false,
  date_check_update: "",
  command_list: [
    {
      name: "ping",
      command: "ping www.google.com",
      description: "get site ping",
      input_name_list: [],
    },
    {
      name: "ping+",
      command: "ping www.$Site:google$.$Domain:com$",
      description: "get site ping with input",
      input_name_list: [
        { name: "Site", type: "text", default: "google" },
        { name: "Domain", type: "text", default: "com" },
      ],
    },
  ],
});

module.exports.defaultJson = defaultJson;
