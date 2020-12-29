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

  try {
    let message = [];
    let type = "success";

    const dirMessage = createNewDir();
    message.push(`${dirMessage.message}\n`);
    type = dirMessage.type || type;

    const componentMessage = createComponentFile();
    message.push(componentMessage.message);

    const sassMessage = createScssFile();
    message.push(sassMessage.message);

    const testMessage = createTestFile();
    message.push(testMessage.message);

    if (options.withStory.some((alias) => Boolean(argv[alias]))) {
      const storyMessage = createStoryFile();
      message.push(storyMessage.message);
    }

    log(message.join("\n"), {
      type,
      header,
    });
  } catch (err) {
    console.log(err);
  }
})();
