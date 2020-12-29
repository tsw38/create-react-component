import fs from "fs";
import path from "path";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const createTestFile = () => {
  const { c, d, destination, component, ts, typescript } = argv;

  const componentPath = path.resolve(
    process.env.PWD,
    d || destination || "src/components",
    c || component
  );

  fs.writeFileSync(
    `${componentPath}/${c || component}.spec.${ts || typescript ? "ts" : "js"}`,
    `
import React from 'react';

import {render, waitFor, screen} from '@testing-library/react'

import userEvent from '@testing-library/user-event'

import ${c || component} from './${c || component}';

describe('<${c || component} />', () => {
    it('renders properly', () => {
        expect(true).toBeTruthy();
    })
})
    `
  );

  return {
    message: "Creating test file",
  };
};

export default createTestFile;
