import { execa, inquirer, chalk } from '@walrus/cli-utils';
import { emojis } from '@walrus/commit-emoji';
import { getErrorAndLog, isStageEmpty, getCommitMessage } from './utils';
import { Commit, CommitConfig } from './types';

const { printErrorAndExit, logStep } = getErrorAndLog(`commit`);
export { printErrorAndExit, logStep };

export async function commit(config: CommitConfig = {}) {
  const { types: commitTypes = emojis, skipPush, skipCommit } = config;

  const types = commitTypes.map((item) => {
    const value = `${item.code ? item.code + ' ' : ''}` + item.commitType;
    return {
      name: `${value}: ${item['zh-CN']}`,
      value
    };
  });

  // 未修改任何文件
  const gitStatus = execa.sync('git', ['status', '--porcelain']).stdout;
  if (!gitStatus.length) {
    printErrorAndExit(`未修改任何文件。`);
  }

  // 未暂存文件
  if (isStageEmpty()) {
    printErrorAndExit(`不存在暂存文件。`);
  }

  // 获取message信息
  const reult: Commit = await inquirer.prompt([
    {
      name: 'type',
      message: '请选择您本次提交的修改类型:',
      type: 'list',
      choices: types,
      validate: (value: string) => {
        if (value) {
          return true;
        }
        return '修改类型不能为空';
      }
    },
    {
      name: 'scope',
      message: '请明确本次提交的改动范围(可选):',
      type: 'input'
    },
    {
      name: 'subject',
      message: '简短描述本次改动:',
      type: 'input',
      validate: (value: string) => {
        if (value) {
          return true;
        }
        return '提交简述不能为空';
      }
    },
    {
      name: 'body',
      message: `详细描述本次改动, 使用 '|' 换行. (可选):`,
      type: 'input'
    },
    {
      name: 'footer',
      message: `请输入提交的页脚, 使用 '|' 换行. (可选):`,
      type: 'input'
    }
  ]);

  const message = getCommitMessage(reult);

  console.log(chalk.green(`本次提交的信息为:`));
  console.log(message);

  const { confirmCommit } = await inquirer.prompt([
    {
      name: 'confirmCommit',
      message: `确认提交本次改动?`,
      type: 'confirm'
    }
  ]);

  if (!confirmCommit) return;

  if (!skipCommit) {
    logStep(`提交代码`);

    // 提交代码
    await execa.sync('git', ['commit', '--message', `${message}`]);
  }

  if (!skipPush && !skipCommit) {
    logStep(`提交代码到远端`);

    // 提交代码到远端
    await execa.sync('git', ['push']);
  }
}
