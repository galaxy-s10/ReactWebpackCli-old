import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import routes from './router';
// import Login from './pages/login';
import Layout from './layout/index';

const App = function (props) {
  const { history } = props;
  return (
    <div>
      {/* App组件外层已经在BrowserRouter里面了，这里就不能加BrowserRouter了，
      否则会导致浏览器url变了，但是页面没有跳转刷新 */}
      {/* <BrowserRouter> */}
      {/* {renderRoutes(routes)} */}
      <Layout></Layout>
      {/* </BrowserRouter> */}
    </div>
  );
};
export default memo(withRouter(App));
