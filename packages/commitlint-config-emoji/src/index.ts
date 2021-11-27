import { RuleConfigSeverity } from '@commitlint/types';
import type { LintOptions, QualifiedRules } from '@commitlint/types';
import { types } from '@walrus/commit-types';
import emojiPlugin from '@walrus/commitlint-plugin-emoji';
import { parserOpts } from './config';

const { Error } = RuleConfigSeverity;

const rules: QualifiedRules = {
  'start-with-emoji': [Error, 'always'],
  'type-enum': [Error, 'always', types],
  // 内容以空行开始
  'body-leading-blank': [Error, 'always'],
  // 结尾以空行开始
  'footer-leading-blank': [Error, 'always'],
  // 标题最大长度 72 个字符
  'header-max-length': [Error, 'always', 72],
  // Scope 永远小写
  'scope-case': [Error, 'always', 'lower-case'],
  // 不允许标题空着
  'subject-empty': [Error, 'never'],
  // 不允许使用句号
  'subject-full-stop': [Error, 'never', '.'],
  // type 必须小写
  'type-case': [Error, 'always', 'lower-case'],
  // type 不能为空
  'type-empty': [Error, 'never']
};

const parserPreset: LintOptions = {
  parserOpts,
  plugins: {
    emoji: emojiPlugin
  }
};

export default {
  rules,
  parserPreset,
  plugins: [emojiPlugin]
};
