import { lint } from './utils';

describe('invalid commit', () => {
  it('$ chore(scope): test -> 不存在表情符号', async () => {
    const { valid, errors } = await lint('chore(scope): test');

    expect(valid).toBeFalsy();
    expect(errors[0].name).toBe('start-with-emoji');
  });
});

describe('valid commit', () => {
  it('$ :white_check_mark: test: test -> passed', async () => {
    const { valid } = await lint(':white_check_mark: test: test');

    expect(valid).toBeTruthy();
  });

  it('$ :sparkles: feat(web): add new feat -> passed', async () => {
    const { valid } = await lint(':sparkles: feat(web): add new feat');

    expect(valid).toBeTruthy();
  });

  it('$ :memo: docs(button): 更新文档 -> passed', async () => {
    const { valid } = await lint(':memo: docs(button): 更新文档');

    expect(valid).toBeTruthy();
  });

  it('$ 💄 style(button): 优化按钮样式 -> passed', async () => {
    const { valid } = await lint('💄 style(button): 优化按钮样式');

    expect(valid).toBeTruthy();
  });

  it('$ ♻️ refactor(button): 代码重构 -> passed', async () => {
    const { valid, errors } = await lint('♻️ style(button): 优化按钮样式');

    expect(valid).toBeTruthy();
  });
});
