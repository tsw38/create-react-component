import fs from "fs";
import path from "path";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const createComponentFile = () => {
  const { c, d, destination, component, carbon, ts, typescript } = argv;

  const componentPath = path.resolve(
    process.env.PWD,
    d || destination || "src/components",
    c || component
  );

  const componentTemplate = `
import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
${
  carbon
    ? "import {" + (c || component) + "} from 'carbon-components-react';"
    : ""
}
import './${c || component}.scss';

const ${c || component} = props => <div data-testid="${
    c || component
  }" className="${c || component}"></div>;

${c || component}.propTypes = {}

export default ${c || component};
`;

  fs.writeFileSync(
    `${componentPath}/${c || component}.${ts || typescript ? "tsx" : "jsx"}`,
    componentTemplate,
    "utf-8"
  );

  return {
    message: "Creating component file",
  };
};

export default createComponentFile;
