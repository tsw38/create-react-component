import fs from "fs";
import path from "path";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const createScssFile = () => {
  const { c, d, destination, component } = argv;

  const componentPath = path.resolve(
    process.env.PWD,
    d || destination,
    c || component
  );

  fs.writeFileSync(
    `${componentPath}/${c || component}.scss`,
    `.${c || component} {\r\r}`,
    "utf-8"
  );

  return {
    message: "Creating scss file",
  };
};

export default createScssFile;
