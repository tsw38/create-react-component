import fs from "fs";
import path from "path";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const createComponentFile = () => {
  const { c, d, destination, component, carbon, ts, typescript } = argv;

  const componentPath = path.resolve(
    process.env.PWD,
    d || destination,
    c || component
  );

  const componentTemplate = `
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import ${c || component}Component from './${c || component}';

// uncommment this line to include styles only for the story
// import styles from "./${c || component}.stories.module.scss"

export default {
    title: '${c || component}',
    component: ${c || component}Component
} as Meta;

export const Default = (args) => <${c || component}Component {...args} />
`;

  fs.writeFileSync(
    `${componentPath}/${c || component}.stories.${
      ts || typescript ? "tsx" : "jsx"
    }`,
    componentTemplate,
    "utf-8"
  );

  return {
    message: "Creating story file",
  };
};

export default createComponentFile;
