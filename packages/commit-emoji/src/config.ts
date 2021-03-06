import { EmojiInfo } from './types';

export const emojis: EmojiInfo[] = [
  {
    emoji: 'â¨',
    entity: '&#x2728;',
    code: ':sparkles:',
    commitType: 'feat',
    'zh-CN': 'æ°åè½',
    'en-US': 'Introduce new features.',
    semver: 'minor'
  },
  {
    emoji: 'ð¥',
    entity: '&#x1f4a5;',
    code: ':boom:',
    commitType: 'feat',
    'zh-CN': 'éå¤§æ´æ¹',
    'en-US': 'Introduce breaking changes.',
    semver: 'major'
  },
  {
    emoji: 'ð©¹',
    entity: '&#x1FA79;',
    code: ':adhesive_bandage:',
    commitType: 'fix',
    'zh-CN': 'ä¿®å¤éå³é®é®é¢',
    'en-US': 'Simple fix for a non-critical issue.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#x1f41b;',
    code: ':bug:',
    commitType: 'fix',
    'zh-CN': 'ä¿®å¤BUG',
    'en-US': 'Fix a bug.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#128657;',
    code: ':ambulance:',
    commitType: 'fix',
    'zh-CN': 'ä¿®å¤å³é®é®é¢',
    'en-US': 'Critical hotfix.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#x1f512;',
    code: ':lock:',
    commitType: 'fix',
    'zh-CN': 'ä¿®å¤å®å¨é®é¢',
    'en-US': 'Fix security issues.',
    semver: 'patch'
  },
  {
    emoji: 'ð¨',
    entity: '&#x1f3a8;',
    code: ':art:',
    commitType: 'style',
    'zh-CN': 'æ¹åä»£ç çç»æ/æ ¼å¼ã',
    'en-US': 'Improve structure / format of the code.',
    semver: null
  },
  {
    emoji: 'ð',
    entity: '&#x1F5D1;',
    code: ':wastebasket:',
    commitType: 'wip',
    'zh-CN': 'æ¸é¤éè¦å¼ç¨çä»£ç ã',
    'en-US': 'Deprecate code that needs to be cleaned up.',
    semver: 'patch'
  },
  {
    emoji: 'ð¥',
    entity: '&#x1f525;',
    code: ':fire:',
    commitType: 'chore',
    'zh-CN': 'å é¤ä»£ç ææä»¶ã',
    'en-US': 'Remove code or files.',
    semver: null
  },
  {
    emoji: 'â¡ï¸',
    entity: '&#x26a1;',
    code: ':zap:',
    commitType: 'perf',
    'zh-CN': 'æé«æ§è½ã',
    'en-US': 'Improve performance.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#x1f4dd;',
    code: ':memo:',
    commitType: 'docs',
    'zh-CN': 'æ·»å ææ´æ°ææ¡£ã',
    'en-US': 'Add or update documentation.',
    semver: null
  },
  {
    emoji: 'ð',
    entity: '&#x1f680;',
    code: ':rocket:',
    commitType: 'build',
    'zh-CN': 'é¡¹ç®é¨ç½²ã',
    'en-US': 'Deploy stuff.',
    semver: null
  },
  {
    emoji: 'ð',
    entity: '&#ff99cc;',
    code: ':lipstick:',
    commitType: 'ui',
    'zh-CN': 'æ·»å ææ´æ°UIåæ ·å¼æä»¶ã',
    'en-US': 'Add or update the UI and style files.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#127881;',
    code: ':tada:',
    commitType: 'chore',
    'zh-CN': 'åå§åé¡¹ç®',
    'en-US': 'Begin a project.',
    semver: null
  },
  {
    emoji: 'â',
    entity: '&#x2705;',
    code: ':white_check_mark:',
    commitType: 'test',
    'zh-CN': 'æ·»å ææ´æ°æµè¯',
    'en-US': 'Add or update tests.',
    semver: null
  },
  {
    emoji: 'ð',
    entity: '&#x1f516;',
    code: ':bookmark:',
    commitType: 'chore',
    'zh-CN': 'åå¸/çæ¬æ ç­¾ã',
    'en-US': 'Release / Version tags.',
    semver: null
  },
  {
    emoji: 'ð¨',
    entity: '&#x1f6a8;',
    code: ':rotating_light:',
    commitType: 'chore',
    'zh-CN': 'ä¿®å¤ç¼è¯å¨ / linterè­¦åã',
    'en-US': 'Fix compiler / linter warnings.',
    semver: null
  },
  {
    emoji: 'ð§',
    entity: '&#x1f6a7;',
    code: ':construction:',
    commitType: 'wip',
    'zh-CN': 'å·¥ä½æ­£å¨è¿è¡ä¸­ã',
    'en-US': 'Work in progress.',
    semver: null
  },
  {
    emoji: 'â°ï¸',
    entity: '&#x26B0;',
    code: ':coffin:',
    commitType: 'wip',
    'zh-CN': 'å é¤æ æä»£ç ã',
    'en-US': 'Remove dead code.',
    semver: null
  },
  {
    emoji: 'ð',
    entity: '&#x1f49a;',
    code: ':green_heart:',
    commitType: 'ci',
    'zh-CN': 'ä¿®å¤CIæå»ºã',
    'en-US': 'Fix CI Build.',
    semver: null
  },
  {
    emoji: 'â¬ï¸',
    entity: 'â¬ï¸',
    code: ':arrow_down:',
    commitType: 'build',
    'zh-CN': 'éçº§ä¾èµã',
    'en-US': 'Downgrade dependencies.',
    semver: 'patch'
  },
  {
    emoji: 'â¬ï¸',
    entity: 'â¬ï¸',
    code: ':arrow_up:',
    commitType: 'build',
    'zh-CN': 'åçº§ä¾èµã',
    'en-US': 'Upgrade dependencies.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#x1F4CC;',
    code: ':pushpin:',
    commitType: 'build',
    'zh-CN': 'éå®ä¾èµã',
    'en-US': 'Pin dependencies to specific versions.',
    semver: 'patch'
  },
  {
    emoji: 'ð·',
    entity: '&#x1f477;',
    code: ':construction_worker:',
    commitType: 'ci',
    'zh-CN': 'æ·»å ææ´æ°CIæå»ºç³»ç»ã',
    'en-US': 'Add or update CI build system.',
    semver: null
  },
  {
    emoji: 'ð',
    entity: '&#x1F4C8;',
    code: ':chart_with_upwards_trend:',
    commitType: 'wip',
    'zh-CN': 'æ·»å ææ´æ°åææè·è¸ªä»£ç ã',
    'en-US': 'Add or update analytics or track code.',
    semver: 'patch'
  },
  {
    emoji: 'â»ï¸',
    entity: '&#x2672;',
    code: ':recycle:',
    commitType: 'refactor',
    'zh-CN': 'éæä»£ç ã',
    'en-US': 'Refactor code.',
    semver: null
  },
  {
    emoji: 'â',
    entity: '&#10133;',
    code: ':heavy_plus_sign:',
    commitType: 'build',
    'zh-CN': 'æ·»å ä¾èµé¡¹ã',
    'en-US': 'Add a dependency.',
    semver: 'patch'
  },
  {
    emoji: 'â',
    entity: '&#10134;',
    code: ':heavy_minus_sign:',
    commitType: 'build',
    'zh-CN': 'å é¤ä¾èµé¡¹ã',
    'en-US': 'Remove a dependency.',
    semver: 'patch'
  },
  {
    emoji: 'ð§',
    entity: '&#x1f527;',
    code: ':wrench:',
    commitType: 'chore',
    'zh-CN': 'æ·»å ææ´æ°éç½®æä»¶ã',
    'en-US': 'Add or update configuration files.',
    semver: 'patch'
  },
  {
    emoji: 'ð¨',
    entity: '&#128296;',
    code: ':hammer:',
    commitType: 'ci',
    'zh-CN': 'æ·»å ææ´æ°å¼åèæ¬ã',
    'en-US': 'Add or update development scripts.',
    semver: null
  },
  {
    emoji: 'ð·ï¸',
    entity: '&#127991;',
    code: ':label:',
    commitType: 'wip',
    'zh-CN': 'æ·»å ææ´æ°ç±»åã',
    'en-US': 'Add or update types.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#127760;',
    code: ':globe_with_meridians:',
    commitType: 'wip',
    'zh-CN': 'å½éååæ¬å°åã',
    'en-US': 'Internationalization and localization.',
    semver: 'patch'
  },
  {
    emoji: 'âï¸',
    entity: '&#59161;',
    code: ':pencil2:',
    commitType: 'wip',
    'zh-CN': 'ä¿®æ­£éå«å­ã',
    'en-US': 'Fix typos.',
    semver: 'patch'
  },
  {
    emoji: 'ð©',
    entity: '&#58613;',
    code: ':poop:',
    commitType: 'wip',
    'zh-CN': 'ç¼åéè¦æ¹è¿çéè¯¯ä»£ç ã',
    'en-US': 'Write bad code that needs to be improved.',
    semver: null
  },
  {
    emoji: 'âª',
    entity: '&#9194;',
    code: ':rewind:',
    commitType: 'revert',
    'zh-CN': 'ä»£ç åæ»ã',
    'en-US': 'Revert changes.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#128256;',
    code: ':twisted_rightwards_arrows:',
    commitType: 'chore',
    'zh-CN': 'åå¹¶åæ¯ã',
    'en-US': 'Merge branches.',
    semver: null
  },
  {
    emoji: 'ð¦',
    entity: '&#1F4E6;',
    code: ':package:',
    commitType: 'chore',
    'zh-CN': 'æ·»å ææ´æ°ç¼è¯çæä»¶æåã',
    'en-US': 'Add or update compiled files or packages.',
    semver: 'patch'
  },
  {
    emoji: 'ð½',
    entity: '&#1F47D;',
    code: ':alien:',
    commitType: 'wip',
    'zh-CN': 'ç±äºå¤é¨APIçæ´æ¹èæ´æ°äºä»£ç ã',
    'en-US': 'Update code due to external API changes.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#1F69A;',
    code: ':truck:',
    commitType: 'wip',
    'zh-CN': 'ç§»å¨æéå½åèµæºã',
    'en-US': 'Move or rename resources.',
    semver: null
  },
  {
    emoji: 'ð',
    entity: '&#1F4C4;',
    code: ':page_facing_up:',
    commitType: 'chore',
    'zh-CN': 'æ·»å ææ´æ°è®¸å¯è¯ã',
    'en-US': 'Add or update license.',
    semver: null
  },
  {
    emoji: 'ð±',
    entity: '&#1F371',
    code: ':bento:',
    commitType: 'wip',
    'zh-CN': 'æ·»å ææ´æ°èµäº§ã',
    'en-US': 'Add or update assets.',
    semver: 'patch'
  },
  {
    emoji: 'â¿ï¸',
    entity: '&#9855;',
    code: ':wheelchair:',
    commitType: 'chore',
    'zh-CN': 'æ¹åå¯è®¿é®æ§ã',
    'en-US': 'Improve accessibility.',
    semver: 'patch'
  },
  {
    emoji: 'ð¡',
    entity: '&#128161;',
    code: ':bulb:',
    commitType: 'wip',
    'zh-CN': 'å¨æºä»£ç ä¸­æ·»å ææ´æ°æ³¨éã',
    'en-US': 'Add or update comments in source code.',
    semver: null
  },
  {
    emoji: 'ð»',
    entity: '&#x1f37b;',
    code: ':beers:',
    commitType: 'wip',
    'zh-CN': 'ééå°ç¼åä»£ç ã',
    'en-US': 'Write code drunkenly.',
    semver: null
  },
  {
    emoji: 'ð¬',
    entity: '&#128172;',
    code: ':speech_balloon:',
    commitType: 'chore',
    'zh-CN': 'æ·»å ææ´æ°ææ¬åæå­ã',
    'en-US': 'Add or update text and literals.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#128451;',
    code: ':card_file_box:',
    commitType: 'wip',
    'zh-CN': 'æ§è¡ä¸æ°æ®åºç¸å³çæ´æ¹ã',
    'en-US': 'Perform database related changes.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#128266;',
    code: ':loud_sound:',
    commitType: 'chore',
    'zh-CN': 'æ·»å ææ´æ°æ¥å¿',
    'en-US': 'Add or update logs.',
    semver: null
  },
  {
    emoji: 'ð',
    entity: '&#128263;',
    code: ':mute:',
    commitType: 'chore',
    'zh-CN': 'å é¤æ¥å¿',
    'en-US': 'Remove logs.',
    semver: null
  },
  {
    emoji: 'ð¥',
    entity: '&#128101;',
    code: ':busts_in_silhouette:',
    commitType: 'chore',
    'zh-CN': 'æ·»å ææ´æ°è´¡ç®èã',
    'en-US': 'Add or update contributor(s).',
    semver: null
  },
  {
    emoji: 'ð¸',
    entity: '&#128696;',
    code: ':children_crossing:',
    commitType: 'wip',
    'zh-CN': 'æ¹åç¨æ·ä½éª/å¯ç¨æ§ã',
    'en-US': 'Improve user experience / usability.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#1f3d7;',
    code: ':building_construction:',
    commitType: 'chore',
    'zh-CN': 'è¿è¡ä½ç³»ç»ææ´æ¹ã',
    'en-US': 'Make architectural changes.',
    semver: null
  },
  {
    emoji: 'ð±',
    entity: '&#128241;',
    code: ':iphone:',
    commitType: 'style',
    'zh-CN': 'è¿è¡ååºå¼è®¾è®¡ã',
    'en-US': 'Work on responsive design.',
    semver: 'patch'
  },
  {
    emoji: 'ð¤¡',
    entity: '&#129313;',
    code: ':clown_face:',
    commitType: 'chore',
    'zh-CN': 'mock ç¸å³',
    'en-US': 'Mock things.',
    semver: null
  },
  {
    emoji: 'ð',
    entity: '&#8bdfe7;',
    code: ':see_no_evil:',
    commitType: 'chore',
    'zh-CN': 'æ·»å ææ´æ°å¿½ç¥æä»¶ã',
    'en-US': 'Add or update a ignore file.',
    semver: null
  },
  {
    emoji: 'ð¸',
    entity: '&#128248;',
    code: ':camera_flash:',
    commitType: 'wip',
    'zh-CN': 'æ·»å ææ´æ°å¿«ç§ã',
    'en-US': 'Add or update snapshots.',
    semver: null
  },
  {
    emoji: 'â',
    entity: '&#128248;',
    code: ':alembic:',
    commitType: 'wip',
    'zh-CN': 'è¿è¡å®éªã',
    'en-US': 'Perform experiments.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#128269;',
    code: ':mag:',
    commitType: 'wip',
    'zh-CN': 'æ¹åSEOã',
    'en-US': 'Improve SEO.',
    semver: 'patch'
  },
  {
    emoji: 'ð±',
    entity: '&#127793;',
    code: ':seedling:',
    commitType: 'chore',
    'zh-CN': 'æ·»å ææ´æ°ç§å­æä»¶ã',
    'en-US': 'Add or update seed files.',
    semver: null
  },
  {
    emoji: 'ð©',
    entity: '&#x1F6A9;',
    code: ':triangular_flag_on_post:',
    commitType: 'chore',
    'zh-CN': 'æ·»å ï¼æ´æ°æå é¤åè½æ å¿ã',
    'en-US': 'Add, update, or remove feature flags.',
    semver: 'patch'
  },
  {
    emoji: 'ð¥',
    entity: '&#x1F945;',
    code: ':goal_net:',
    commitType: 'wip',
    'zh-CN': 'æè·éè¯¯ã',
    'en-US': 'Catch errors.',
    semver: 'patch'
  },
  {
    emoji: 'ð«',
    entity: '&#x1f4ab;',
    code: ':dizzy:',
    commitType: 'style',
    'zh-CN': 'æ·»å ææ´æ°å¨ç»åè¿æ¸¡ã',
    'en-US': 'Add or update animations and transitions.',
    semver: 'patch'
  },
  {
    emoji: 'ð',
    entity: '&#x1F6C2;',
    code: ':passport_control:',
    commitType: 'wip',
    'zh-CN': 'å¤çä¸ææï¼è§è²åæéç¸å³çä»£ç ã',
    'en-US': 'Work on code related to authorization, roles and permissions.',
    semver: 'patch'
  },
  {
    emoji: 'ð§',
    entity: '&#x1F9D0;',
    code: ':monocle:',
    commitType: 'chore',
    'zh-CN': 'æ°æ®æ¢ç´¢/æ£æ¥ã',
    'en-US': 'Data exploration/inspection.',
    semver: null
  },
  {
    emoji: 'ð¥',
    entity: '&#129370;',
    code: ':egg:',
    commitType: 'chore',
    'zh-CN': 'æ·»å ææ´æ°å¤æ´»èå½©èã',
    'en-US': 'Add or update an easter egg.',
    semver: 'patch'
  }
];
