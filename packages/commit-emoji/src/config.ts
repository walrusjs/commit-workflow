import { EmojiInfo } from './types';

export const emojis: EmojiInfo[] = [
  {
    emoji: '✨',
    entity: '&#x2728;',
    code: ':sparkles:',
    commitType: 'feat',
    'zh-CN': '新功能',
    'en-US': 'Introduce new features.',
    semver: 'minor'
  },
  {
    emoji: '💥',
    entity: '&#x1f4a5;',
    code: ':boom:',
    commitType: 'feat',
    'zh-CN': '重大更改',
    'en-US': 'Introduce breaking changes.',
    semver: 'major'
  },
  {
    emoji: '🩹',
    entity: '&#x1FA79;',
    code: ':adhesive_bandage:',
    commitType: 'fix',
    'zh-CN': '修复非关键问题',
    'en-US': 'Simple fix for a non-critical issue.',
    semver: 'patch'
  },
  {
    emoji: '🐛',
    entity: '&#x1f41b;',
    code: ':bug:',
    commitType: 'fix',
    'zh-CN': '修复BUG',
    'en-US': 'Fix a bug.',
    semver: 'patch'
  },
  {
    emoji: '🚑',
    entity: '&#128657;',
    code: ':ambulance:',
    commitType: 'fix',
    'zh-CN': '修复关键问题',
    'en-US': 'Critical hotfix.',
    semver: 'patch'
  },
  {
    emoji: '🔒',
    entity: '&#x1f512;',
    code: ':lock:',
    commitType: 'fix',
    'zh-CN': '修复安全问题',
    'en-US': 'Fix security issues.',
    semver: 'patch'
  },
  {
    emoji: '🎨',
    entity: '&#x1f3a8;',
    code: ':art:',
    commitType: 'style',
    'zh-CN': '改善代码的结构/格式。',
    'en-US': 'Improve structure / format of the code.',
    semver: null
  },
  {
    emoji: '🗑',
    entity: '&#x1F5D1;',
    code: ':wastebasket:',
    commitType: 'wip',
    'zh-CN': '清除需要弃用的代码。',
    'en-US': 'Deprecate code that needs to be cleaned up.',
    semver: 'patch'
  },
  {
    emoji: '🔥',
    entity: '&#x1f525;',
    code: ':fire:',
    commitType: 'chore',
    'zh-CN': '删除代码或文件。',
    'en-US': 'Remove code or files.',
    semver: null
  },
  {
    emoji: '⚡️',
    entity: '&#x26a1;',
    code: ':zap:',
    commitType: 'perf',
    'zh-CN': '提高性能。',
    'en-US': 'Improve performance.',
    semver: 'patch'
  },
  {
    emoji: '📝',
    entity: '&#x1f4dd;',
    code: ':memo:',
    commitType: 'docs',
    'zh-CN': '添加或更新文档。',
    'en-US': 'Add or update documentation.',
    semver: null
  },
  {
    emoji: '🚀',
    entity: '&#x1f680;',
    code: ':rocket:',
    commitType: 'build',
    'zh-CN': '项目部署。',
    'en-US': 'Deploy stuff.',
    semver: null
  },
  {
    emoji: '💄',
    entity: '&#ff99cc;',
    code: ':lipstick:',
    commitType: 'ui',
    'zh-CN': '添加或更新UI和样式文件。',
    'en-US': 'Add or update the UI and style files.',
    semver: 'patch'
  },
  {
    emoji: '🎉',
    entity: '&#127881;',
    code: ':tada:',
    commitType: 'chore',
    'zh-CN': '初始化项目',
    'en-US': 'Begin a project.',
    semver: null
  },
  {
    emoji: '✅',
    entity: '&#x2705;',
    code: ':white_check_mark:',
    commitType: 'test',
    'zh-CN': '添加或更新测试',
    'en-US': 'Add or update tests.',
    semver: null
  },
  {
    emoji: '🔖',
    entity: '&#x1f516;',
    code: ':bookmark:',
    commitType: 'chore',
    'zh-CN': '发布/版本标签。',
    'en-US': 'Release / Version tags.',
    semver: null
  },
  {
    emoji: '🚨',
    entity: '&#x1f6a8;',
    code: ':rotating_light:',
    commitType: 'chore',
    'zh-CN': '修复编译器 / linter警告。',
    'en-US': 'Fix compiler / linter warnings.',
    semver: null
  },
  {
    emoji: '🚧',
    entity: '&#x1f6a7;',
    code: ':construction:',
    commitType: 'wip',
    'zh-CN': '工作正在进行中。',
    'en-US': 'Work in progress.',
    semver: null
  },
  {
    emoji: '⚰️',
    entity: '&#x26B0;',
    code: ':coffin:',
    commitType: 'wip',
    'zh-CN': '删除无效代码。',
    'en-US': 'Remove dead code.',
    semver: null
  },
  {
    emoji: '💚',
    entity: '&#x1f49a;',
    code: ':green_heart:',
    commitType: 'ci',
    'zh-CN': '修复CI构建。',
    'en-US': 'Fix CI Build.',
    semver: null
  },
  {
    emoji: '⬇️',
    entity: '⬇️',
    code: ':arrow_down:',
    commitType: 'build',
    'zh-CN': '降级依赖。',
    'en-US': 'Downgrade dependencies.',
    semver: 'patch'
  },
  {
    emoji: '⬆️',
    entity: '⬆️',
    code: ':arrow_up:',
    commitType: 'build',
    'zh-CN': '升级依赖。',
    'en-US': 'Upgrade dependencies.',
    semver: 'patch'
  },
  {
    emoji: '📌',
    entity: '&#x1F4CC;',
    code: ':pushpin:',
    commitType: 'build',
    'zh-CN': '锁定依赖。',
    'en-US': 'Pin dependencies to specific versions.',
    semver: 'patch'
  },
  {
    emoji: '👷',
    entity: '&#x1f477;',
    code: ':construction_worker:',
    commitType: 'ci',
    'zh-CN': '添加或更新CI构建系统。',
    'en-US': 'Add or update CI build system.',
    semver: null
  },
  {
    emoji: '📈',
    entity: '&#x1F4C8;',
    code: ':chart_with_upwards_trend:',
    commitType: 'wip',
    'zh-CN': '添加或更新分析或跟踪代码。',
    'en-US': 'Add or update analytics or track code.',
    semver: 'patch'
  },
  {
    emoji: '♻️',
    entity: '&#x2672;',
    code: ':recycle:',
    commitType: 'refactor',
    'zh-CN': '重构代码。',
    'en-US': 'Refactor code.',
    semver: null
  },
  {
    emoji: '➕',
    entity: '&#10133;',
    code: ':heavy_plus_sign:',
    commitType: 'build',
    'zh-CN': '添加依赖项。',
    'en-US': 'Add a dependency.',
    semver: 'patch'
  },
  {
    emoji: '➖',
    entity: '&#10134;',
    code: ':heavy_minus_sign:',
    commitType: 'build',
    'zh-CN': '删除依赖项。',
    'en-US': 'Remove a dependency.',
    semver: 'patch'
  },
  {
    emoji: '🔧',
    entity: '&#x1f527;',
    code: ':wrench:',
    commitType: 'chore',
    'zh-CN': '添加或更新配置文件。',
    'en-US': 'Add or update configuration files.',
    semver: 'patch'
  },
  {
    emoji: '🔨',
    entity: '&#128296;',
    code: ':hammer:',
    commitType: 'ci',
    'zh-CN': '添加或更新开发脚本。',
    'en-US': 'Add or update development scripts.',
    semver: null
  },
  {
    emoji: '🏷️',
    entity: '&#127991;',
    code: ':label:',
    commitType: 'wip',
    'zh-CN': '添加或更新类型。',
    'en-US': 'Add or update types.',
    semver: 'patch'
  },
  {
    emoji: '🌐',
    entity: '&#127760;',
    code: ':globe_with_meridians:',
    commitType: 'wip',
    'zh-CN': '国际化和本地化。',
    'en-US': 'Internationalization and localization.',
    semver: 'patch'
  },
  {
    emoji: '✏️',
    entity: '&#59161;',
    code: ':pencil2:',
    commitType: 'wip',
    'zh-CN': '修正错别字。',
    'en-US': 'Fix typos.',
    semver: 'patch'
  },
  {
    emoji: '💩',
    entity: '&#58613;',
    code: ':poop:',
    commitType: 'wip',
    'zh-CN': '编写需要改进的错误代码。',
    'en-US': 'Write bad code that needs to be improved.',
    semver: null
  },
  {
    emoji: '⏪',
    entity: '&#9194;',
    code: ':rewind:',
    commitType: 'revert',
    'zh-CN': '代码回滚。',
    'en-US': 'Revert changes.',
    semver: 'patch'
  },
  {
    emoji: '🔀',
    entity: '&#128256;',
    code: ':twisted_rightwards_arrows:',
    commitType: 'chore',
    'zh-CN': '合并分支。',
    'en-US': 'Merge branches.',
    semver: null
  },
  {
    emoji: '📦',
    entity: '&#1F4E6;',
    code: ':package:',
    commitType: 'chore',
    'zh-CN': '添加或更新编译的文件或包。',
    'en-US': 'Add or update compiled files or packages.',
    semver: 'patch'
  },
  {
    emoji: '👽',
    entity: '&#1F47D;',
    code: ':alien:',
    commitType: 'wip',
    'zh-CN': '由于外部API的更改而更新了代码。',
    'en-US': 'Update code due to external API changes.',
    semver: 'patch'
  },
  {
    emoji: '🚚',
    entity: '&#1F69A;',
    code: ':truck:',
    commitType: 'wip',
    'zh-CN': '移动或重命名资源。',
    'en-US': 'Move or rename resources.',
    semver: null
  },
  {
    emoji: '📄',
    entity: '&#1F4C4;',
    code: ':page_facing_up:',
    commitType: 'chore',
    'zh-CN': '添加或更新许可证。',
    'en-US': 'Add or update license.',
    semver: null
  },
  {
    emoji: '🍱',
    entity: '&#1F371',
    code: ':bento:',
    commitType: 'wip',
    'zh-CN': '添加或更新资产。',
    'en-US': 'Add or update assets.',
    semver: 'patch'
  },
  {
    emoji: '♿️',
    entity: '&#9855;',
    code: ':wheelchair:',
    commitType: 'chore',
    'zh-CN': '改善可访问性。',
    'en-US': 'Improve accessibility.',
    semver: 'patch'
  },
  {
    emoji: '💡',
    entity: '&#128161;',
    code: ':bulb:',
    commitType: 'wip',
    'zh-CN': '在源代码中添加或更新注释。',
    'en-US': 'Add or update comments in source code.',
    semver: null
  },
  {
    emoji: '🍻',
    entity: '&#x1f37b;',
    code: ':beers:',
    commitType: 'wip',
    'zh-CN': '醉酒地编写代码。',
    'en-US': 'Write code drunkenly.',
    semver: null
  },
  {
    emoji: '💬',
    entity: '&#128172;',
    code: ':speech_balloon:',
    commitType: 'chore',
    'zh-CN': '添加或更新文本和文字。',
    'en-US': 'Add or update text and literals.',
    semver: 'patch'
  },
  {
    emoji: '🗃',
    entity: '&#128451;',
    code: ':card_file_box:',
    commitType: 'wip',
    'zh-CN': '执行与数据库相关的更改。',
    'en-US': 'Perform database related changes.',
    semver: 'patch'
  },
  {
    emoji: '🔊',
    entity: '&#128266;',
    code: ':loud_sound:',
    commitType: 'chore',
    'zh-CN': '添加或更新日志',
    'en-US': 'Add or update logs.',
    semver: null
  },
  {
    emoji: '🔇',
    entity: '&#128263;',
    code: ':mute:',
    commitType: 'chore',
    'zh-CN': '删除日志',
    'en-US': 'Remove logs.',
    semver: null
  },
  {
    emoji: '👥',
    entity: '&#128101;',
    code: ':busts_in_silhouette:',
    commitType: 'chore',
    'zh-CN': '添加或更新贡献者。',
    'en-US': 'Add or update contributor(s).',
    semver: null
  },
  {
    emoji: '🚸',
    entity: '&#128696;',
    code: ':children_crossing:',
    commitType: 'wip',
    'zh-CN': '改善用户体验/可用性。',
    'en-US': 'Improve user experience / usability.',
    semver: 'patch'
  },
  {
    emoji: '🏗',
    entity: '&#1f3d7;',
    code: ':building_construction:',
    commitType: 'chore',
    'zh-CN': '进行体系结构更改。',
    'en-US': 'Make architectural changes.',
    semver: null
  },
  {
    emoji: '📱',
    entity: '&#128241;',
    code: ':iphone:',
    commitType: 'style',
    'zh-CN': '进行响应式设计。',
    'en-US': 'Work on responsive design.',
    semver: 'patch'
  },
  {
    emoji: '🤡',
    entity: '&#129313;',
    code: ':clown_face:',
    commitType: 'chore',
    'zh-CN': 'mock 相关',
    'en-US': 'Mock things.',
    semver: null
  },
  {
    emoji: '🙈',
    entity: '&#8bdfe7;',
    code: ':see_no_evil:',
    commitType: 'chore',
    'zh-CN': '添加或更新忽略文件。',
    'en-US': 'Add or update a ignore file.',
    semver: null
  },
  {
    emoji: '📸',
    entity: '&#128248;',
    code: ':camera_flash:',
    commitType: 'wip',
    'zh-CN': '添加或更新快照。',
    'en-US': 'Add or update snapshots.',
    semver: null
  },
  {
    emoji: '⚗',
    entity: '&#128248;',
    code: ':alembic:',
    commitType: 'wip',
    'zh-CN': '进行实验。',
    'en-US': 'Perform experiments.',
    semver: 'patch'
  },
  {
    emoji: '🔍',
    entity: '&#128269;',
    code: ':mag:',
    commitType: 'wip',
    'zh-CN': '改善SEO。',
    'en-US': 'Improve SEO.',
    semver: 'patch'
  },
  {
    emoji: '🌱',
    entity: '&#127793;',
    code: ':seedling:',
    commitType: 'chore',
    'zh-CN': '添加或更新种子文件。',
    'en-US': 'Add or update seed files.',
    semver: null
  },
  {
    emoji: '🚩',
    entity: '&#x1F6A9;',
    code: ':triangular_flag_on_post:',
    commitType: 'chore',
    'zh-CN': '添加，更新或删除功能标志。',
    'en-US': 'Add, update, or remove feature flags.',
    semver: 'patch'
  },
  {
    emoji: '🥅',
    entity: '&#x1F945;',
    code: ':goal_net:',
    commitType: 'wip',
    'zh-CN': '捕获错误。',
    'en-US': 'Catch errors.',
    semver: 'patch'
  },
  {
    emoji: '💫',
    entity: '&#x1f4ab;',
    code: ':dizzy:',
    commitType: 'style',
    'zh-CN': '添加或更新动画和过渡。',
    'en-US': 'Add or update animations and transitions.',
    semver: 'patch'
  },
  {
    emoji: '🛂',
    entity: '&#x1F6C2;',
    code: ':passport_control:',
    commitType: 'wip',
    'zh-CN': '处理与授权，角色和权限相关的代码。',
    'en-US': 'Work on code related to authorization, roles and permissions.',
    semver: 'patch'
  },
  {
    emoji: '🧐',
    entity: '&#x1F9D0;',
    code: ':monocle:',
    commitType: 'chore',
    'zh-CN': '数据探索/检查。',
    'en-US': 'Data exploration/inspection.',
    semver: null
  },
  {
    emoji: '🥚',
    entity: '&#129370;',
    code: ':egg:',
    commitType: 'chore',
    'zh-CN': '添加或更新复活节彩蛋。',
    'en-US': 'Add or update an easter egg.',
    semver: 'patch'
  }
];
