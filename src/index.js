#!/usr/bin/env node
import minimist from "minimist";
import { log } from "@tsw38/custom-logger";
import {
  createNewDir,
  createScssFile,
  createTestFile,
  createStoryFile,
  createComponentFile,
} from "./create";

import help from "./help";

const header = "Create Component";
const argv = minimist(process.argv.slice(2));

const options = {
  help: ["h", "help"],
  withStory: ["ws", "with-story"],
};

(function () {
  if (options.help.some((alias) => Boolean(argv[alias]))) {
    help();
    return;
  }

  if (!argv.c || argv.component) {
    log("You must provide a component name", {
      type: "error",
      header,
    });
    return;
  }

  try {
    let message = [];
    let type = "success";

    const dirMessage = createNewDir();
    message.push(`${dirMessage}\n`);

    const componentMessage = createComponentFile();
    message.push(componentMessage);

    const sassMessage = createScssFile();
    message.push(sassMessage);

    const testMessage = createTestFile();
    message.push(testMessage);

    if (options.withStory.some((alias) => Boolean(argv[alias]))) {
      const storyMessage = createStoryFile();
      message.push(storyMessage);
    }

    log(message.join("\n"), {
      type,
      header,
    });
  } catch (err) {
    console.log(err.message);
  }
})();
