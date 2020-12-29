import path from "path";
import mkdirp from "mkdirp";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const createNewDir = () => {
  const { c, d, destination, component } = argv;

  const componentPath = path.resolve(
    process.env.PWD,
    d || destination || "src/components",
    c || component
  );

  mkdirp.sync(componentPath);

  return `Creating Directory: ${componentPath}`;
};

export default createNewDir;
