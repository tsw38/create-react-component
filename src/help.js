const commandLineUsage = require("command-line-usage");

const sections = [
  {
    header: "Create Component",
    content: "A CLI snippet for react components",
  },
  {
    header: "Available Options",
    optionList: [
      {
        name: "destination",
        alias: "d",
        typeLabel: " string",
        description: "An optional flag for the destination of the component",
      },
      {
        name: "component",
        alias: "c",
        typeLabel: "   string",
        description: "The name of the component",
      },
      {
        name: "typescript",
        alias: "-ts",
        typeLabel: "boolean",
        description: "If the component should be a ts file",
      },
      {
        name: "with-story",
        alias: "-ws",
        typeLabel: "boolean",
        description: "If a story file should be included",
      },
    ],
  },
];

export default () => console.log(commandLineUsage(sections));
