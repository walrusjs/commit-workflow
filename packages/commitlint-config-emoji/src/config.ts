import type { LintOptions } from '@commitlint/types';

export const parserOpts: LintOptions['parserOpts'] = {
  headerPattern: /^(?::\w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55])\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))\s?(?<ticket>#\d*)?$/,
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket']
};
