#!/usr/bin/env node
// eslint-disable-next-line
import { createRequire } from "node:module";

import { cac } from "cac";

const require = createRequire(import.meta.url);

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const version = <string>require("../../package.json").version;

const cli = cac("vuepress-theme-hope");

cli
  .command(
    "update [source-dir]",
    "Upgrade vuepress-theme-hope for source folder"
  )
  .action(async (sourceDir: string) => {});

cli.command("").action(() => cli.outputHelp());

cli.help();
cli.version(version);

cli.parse();
