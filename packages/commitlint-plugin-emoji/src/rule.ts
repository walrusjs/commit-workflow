import type { Rule } from '@commitlint/types';
import { emojiCodes, emojiUnicodes } from './utils';

export const emoji: Rule = (parsed) => {
  const { raw } = parsed;

  const regex = /^(:\w*:)\s.*/gm;
  const unicodeRegex = /(\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f\ude80-\udeff]|[\u2600-\u2B55])\s.*/gm;

  const result = regex.exec(raw);
  const unicodeResult = unicodeRegex.exec(raw);

  let pass;
  let errorMsg = 'passed';

  if (result) {
    const emojiCode = result[1];
    pass = emojiCodes.includes(emojiCode);
    if (!pass) {
      errorMsg = `${emojiCode} 不存在于配置的表情符号代码列表中，请检查！`;
    }
  } else if (unicodeResult) {
    const unicode = unicodeResult[1];

    pass = emojiUnicodes.includes(unicode);

    if (!pass) {
      errorMsg = `${unicode} 不存在于配置的表情符号列表中，请检查！`;
    }
  } else {
    pass = false;
    errorMsg = '您的提交应以表情符号代码开头！';
  }

  return [pass, errorMsg];
};

export default emoji;
