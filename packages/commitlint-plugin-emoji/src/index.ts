import type { Plugin } from '@commitlint/types';
import { emoji } from './rule';

const plugin: Plugin = {
  rules: {
    'start-with-emoji': emoji
  }
};

export default plugin;
