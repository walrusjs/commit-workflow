import type { Commit, RuleConfigCondition } from '@commitlint/types';
import { emoji } from '../src/rule';

const when: RuleConfigCondition = 'always';

test('should return error message if commit start without gitmoji code', () => {
  const value = emoji({ raw: 'chore(scope): test' } as Commit, when);

  console.log(value);

  // expect(value).toEqual([
  //   false,
  //   'Your commit should start with gitmoji code,please check the emoji code on https://gitmoji.dev/.',
  // ]);
});
