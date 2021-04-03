import type { EmojiInfo } from '@walrus/commit-emoji';

export interface Commit {
  type: string;
  scope?: string;
  subject: string;
  body?: string;
  footer?: string;
}

export interface CommitConfig {
  /**
   * 跳过提交
   */
  skipCommit?: boolean;
  /**
   * 跳过提交到远程
   */
  skipPush?: boolean;
  /**
   * commit message types
   */
  types?: EmojiInfo[];
}
