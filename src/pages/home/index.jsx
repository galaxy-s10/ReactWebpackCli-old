import React, { memo } from 'react';
import { Button } from 'antd';

const Home = function (props) {
  const { history } = props;
  return (
    <div>
      Home页面
      <Button type="primary" onClick={() => history.push('/dashboard')}>
        Dashboard
      </Button>
    </div>
  );
};
export default memo(Home);
