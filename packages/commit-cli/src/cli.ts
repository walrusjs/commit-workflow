#!/usr/bin/env node
import { cac, joycon } from '@walrus/cli-utils';
import { commit, logStep } from './';
import { CommitConfig } from './types';
import { DEFAULT_CONFIG_FILES } from './config';

const cli = cac(`commit`);

cli
  .command('[...entries]')
  .option('--skip-commit', `[boolean] 是否跳过 git commit`, {
    default: false
  })
  .option('--skip-push', `[boolean] 是否跳过 git push`, {
    default: false
  })
  .action((_, opts: any) => {
    const { data = {} } = joycon.loadSync({
      files: DEFAULT_CONFIG_FILES,
      cwd: process.cwd(),
      packageKey: 'commit'
    });

    const config: CommitConfig = {
      ...data,
      ...opts
    };

    commit(config)
      .then(() => {
        logStep(`操作成功`);
        process.exit(0);
      })
      .catch(() => {
        logStep(`操作失败`);
        process.exit(1);
      });
  });

cli.help();
cli.version(require('../package.json').version);
cli.parse();
