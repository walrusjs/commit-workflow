import { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import { emojis, EmojiInfo } from '@walrus/commit-emoji';
import { Row, Col, Input } from 'antd';
import { Card } from './card';
import styles from './index.less';

export default () => {
  const [list, setList] = useState<EmojiInfo[]>(emojis);

  const handleSearch = useCallback(
    debounce((event) => {
      const val = event.target.value;
      setList(() => {
        return emojis.filter((item) => {
          return item.emoji === val || item.code.includes(val);
        });
      });
    }, 400),
    []
  );

  return (
    <div>
      <div className={styles.tools}>
        <Input size="large" placeholder="请输入" onChange={handleSearch} />
      </div>
      <div>
        <Row gutter={[32, 32]}>
          {list.map((item) => {
            return (
              <Col xs={20} sm={16} md={12} lg={8} xl={6} key={item.emoji}>
                <Card info={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
