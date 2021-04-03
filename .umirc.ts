import { join } from 'path';

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/message.svg';

export default {
  title: 'Commit Workflow',
  logo,
  favicon: logo,
  mode: 'site',
  alias: {
    '@walrus/commit-emoji': join(__dirname, 'packages/commit-emoji/src'),
    '@walrus/commitlint-config-emoji': join(__dirname, 'packages/commitlint-config-emoji/src'),
    '@walrus/commitlint-plugin-emoji': join(__dirname, 'packages/commitlint-plugin-emoji/src')
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/walrusjs/commit-workflow'
    }
  ],
  resolve: {
    includes: ['docs', 'packages/commit-emoji/docs']
  },
  hash: true,
  dynamicImport: {},
  webpack5: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ]
};
