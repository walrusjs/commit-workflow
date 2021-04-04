import type { CommitTypes } from './types';

export const types: CommitTypes[] = [
  'build',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test',
  'wip',
  'ui',
  'chore'
];

export default types;
export * from './types';
