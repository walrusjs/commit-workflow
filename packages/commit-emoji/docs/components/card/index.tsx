import React from 'react';
import { message, Tag } from 'antd';
import { EmojiInfo } from '@walrus/commit-emoji';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './index.less';

interface CardProps {
  info: EmojiInfo;
}

const randomIndex = (len) => Math.floor(Math.random() * len);

const randomColor = () => {
  const chars = '0123456789abcdef'.split('');
  const len = chars.length;
  return (
    `#${chars[randomIndex(len)]}${chars[randomIndex(len)]}` +
    `${chars[randomIndex(len)]}${chars[randomIndex(len)]}` +
    `${chars[randomIndex(len)]}${chars[randomIndex(len)]}`
  );
};

export const Card: React.FC<CardProps> = ({ info }) => {
  const handlePass = () => {
    message.success(`拷贝成功`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.emoji} style={{ background: randomColor() }}>
        <CopyToClipboard text={info.emoji} onCopy={handlePass}>
          <span>{info.emoji}</span>
        </CopyToClipboard>
      </div>
      <div className={styles.info}>
        <CopyToClipboard text={info.code} onCopy={handlePass}>
          <div className={styles.code}>{info.code}</div>
        </CopyToClipboard>
        <Tag>{info.commitType}</Tag>
        <div className={styles.description}>{info['zh-CN']}</div>
        <div className={styles.description}>{info['en-US']}</div>
      </div>
    </div>
  );
};

export default Card;
