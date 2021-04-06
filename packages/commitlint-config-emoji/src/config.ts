import type { LintOptions } from '@commitlint/types';

export const parserOpts: LintOptions['parserOpts'] = {
  headerPattern: /^(?::\w*:|.*)\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))\s?(?<ticket>#\d*)?$/,
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket']
};
