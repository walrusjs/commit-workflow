import type { CommitTypes } from '@walrus/commit-types';

export interface EmojiInfo {
  /** 表情符号 */
  emoji: string;
  entity: string;
  /** 表情符号的编码 */
  code: string;
  /** 中文描述 */
  'zh-CN': string;
  /** 英文描述 */
  'en-US': string;
  semver: string;
  /** 提交类型 */
  commitType: CommitTypes;
}
