import path from "path";
import mkdirp from "mkdirp";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const options = {
  component: ["c", "component"],
  destination: ["d", "destination"],
};

const createNewDir = () => {
  let message = "";

  if (!options.destination.some((alias) => Boolean(argv[alias]))) {
    message += 'No destination provided, defaulting to "src/components".\n';
  }

  if (!options.component.some((alias) => Boolean(argv[alias]))) {
    message += "No component name provided, exiting.";
  }

  if (message.length) {
    return { message, type: "error" };
  }

  const { c, d, destination, component } = argv;

  const componentPath = path.resolve(
    process.env.PWD,
    d || destination || "src/components",
    c || component
  );

  mkdirp.sync(componentPath);

  message = `Creating Directory: ${componentPath}`;

  return {
    message,
  };
};

export default createNewDir;
